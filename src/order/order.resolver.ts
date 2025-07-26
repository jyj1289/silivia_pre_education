import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { Order } from './model/order.model';
import { CreateOrderInput } from './dto/create-order.input';

@Resolver()
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Query(() => [Order], { name: 'orders' })
  async findAllByUser(@Args('userId', { type: () => Int }) userId: number) {
    return this.orderService.findAllByUser(userId);
  }

  @Mutation(() => Order)
  async createOrder(
    @Args('userId', { type: () => Int }) userId: number,
    @Args('createOrderInput') input: CreateOrderInput,
  ) {
    return this.orderService.create(userId, input);
  }
}
