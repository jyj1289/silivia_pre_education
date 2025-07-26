import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: CreateUserInput): Promise<User> {
    return await this.prisma.user.create({
      data: input,
    });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(userId: number): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { userId },
    });
    if (!user) throw new NotFoundException('해당 유저를 찾을 수 없습니다.');
    return user;
  }

  async update(input: UpdateUserInput): Promise<User> {
    return await this.prisma.user.update({
      where: { userId: input.userId },
      data: input,
    });
  }

  async delete(userId: number): Promise<User> {
    return await this.prisma.user.delete({ where: { userId } });
  }
}
