import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body(ValidationPipe) request: CreateUserDto) {
    return this.userService.create(request);
  }

  @Patch('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) request: UpdateUserDto,
  ) {
    return this.userService.update(id, request);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.userService.delete(parseInt(id));
  }
}
