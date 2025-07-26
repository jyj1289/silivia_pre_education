import { Module } from '@nestjs/common';
import { OrderResolver } from './order.resolver';
import { OrderService } from './order.service';
import { PrismaModule } from 'nestjs-prisma';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [PrismaModule, UserModule],
  providers: [OrderResolver, OrderService],
})
export class OrderModule {}
