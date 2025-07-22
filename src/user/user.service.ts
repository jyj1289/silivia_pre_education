import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  create(request: CreateUserDto) {
    return this.prisma.user.create({
      data: request,
    });
  }

  update(id: number, request: UpdateUserDto) {
    return this.prisma.user.update({
      where: { userId: id },
      data: request,
    });
  }

  delete(id: number) {
    return this.prisma.user.delete({ where: { userId: id } });
  }
}
