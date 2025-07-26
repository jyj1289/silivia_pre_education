import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateOrderInput } from './dto/create-order.input';
import { UserService } from 'src/user/user.service';

@Injectable()
export class OrderService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  async findAllByUser(userId: number) {
    return await this.prisma.order.findMany({
      where: { userId },
      include: {
        user: true,
        orderItems: {
          include: { product: true },
        },
      },
    });
  }

  async create(userId: number, input: CreateOrderInput) {
    const productIds = input.items.map((i) => i.productId);
    const products = await this.prisma.product.findMany({
      where: { productId: { in: productIds } },
    });

    let total = 0;
    for (const item of input.items) {
      const product = products.find((p) => p.productId === item.productId);
      // prettier-ignore
      if (!product) throw new BadRequestException("주문에 존재하지 않는 상품이 포함되어 있습니다.");
      if (product.quantity < item.quantity)
        throw new BadRequestException('재고가 부족합니다.');

      total += product.price * item.quantity;
    }

    const user = await this.userService.findOne(userId);
    if (user.amount < total)
      throw new BadRequestException('잔액이 부족합니다.');

    for (const item of input.items) {
      await this.prisma.product.update({
        where: { productId: item.productId },
        data: { quantity: { decrement: item.quantity } },
      });
    }
    await this.prisma.user.update({
      where: { userId },
      data: { amount: { decrement: total } },
    });

    return this.prisma.order.create({
      data: {
        user: { connect: { userId } },
        orderItems: {
          create: input.items.map((item) => ({
            product: { connect: { productId: item.productId } },
            quantity: item.quantity,
          })),
        },
      },
      include: {
        orderItems: { include: { product: true } },
        user: true,
      },
    });
  }
}
