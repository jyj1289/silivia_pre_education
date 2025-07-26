import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: CreateProductInput): Promise<Product> {
    return await this.prisma.product.create({
      data: input,
    });
  }

  async findAll(): Promise<Product[]> {
    return await this.prisma.product.findMany();
  }

  async update(input: UpdateProductInput): Promise<Product> {
    return await this.prisma.product.update({
      where: { productId: input.productId },
      data: input,
    });
  }

  async delete(productId: number): Promise<Product> {
    return await this.prisma.product.delete({
      where: { productId },
    });
  }
}
