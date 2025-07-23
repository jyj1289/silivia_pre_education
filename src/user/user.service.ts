import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  create(input: CreateUserInput) {
    return this.prisma.user.create({
      data: input,
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  update(input: UpdateUserInput) {
    return this.prisma.user.update({
      where: { userId: input.userId },
      data: input,
    });
  }

  delete(userId: number) {
    return this.prisma.user.delete({ where: { userId } });
  }
}
