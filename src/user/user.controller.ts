import { Body, Controller, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() request: CreateUserDto) {
    return this.userService.create(request);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() request: UpdateUserDto) {
    return this.userService.update(parseInt(id), request);
  }
}
