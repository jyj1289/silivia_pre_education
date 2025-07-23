import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'user' })
  findAll() {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  createUser(@Args('createUserInput') input: CreateUserInput) {
    return this.userService.create(input);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') input: UpdateUserInput) {
    return this.userService.update(input);
  }

  @Mutation(() => User)
  DeleteUser(@Args('userId', { type: () => Int }) id: number) {
    return this.userService.delete(id);
  }
}
