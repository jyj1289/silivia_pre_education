import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaModule } from 'nestjs-prisma';
import { UserResolver } from './user.resolver';

@Module({
  imports: [PrismaModule],
  providers: [UserService, UserResolver],
})
export class UserModule {}
