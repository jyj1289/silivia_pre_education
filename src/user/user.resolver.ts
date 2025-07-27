import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'user' })
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') input: CreateUserInput,
  ): Promise<User> {
    return this.userService.create(input);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('updateUserInput') input: UpdateUserInput,
  ): Promise<User> {
    return this.userService.update(input);
  }

  @Mutation(() => User)
  async deleteUser(
    @Args('userId', { type: () => Int }) id: number,
  ): Promise<User> {
    return this.userService.delete(id);
  }

  @Mutation(() => User)
  async deposit(
    @Args('userId', { type: () => Int }) id: number,
    @Args('amount', { type: () => Int }) amount: number,
  ): Promise<User> {
    return this.userService.deposit(id, amount);
  }
}
