import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/models/user.model';
import { OrderItem } from './order-item.model';

@ObjectType()
export class Order {
  @Field((type) => Int)
  orderId: number;

  @Field((type) => User)
  user: User;

  @Field((type) => [OrderItem])
  orderItems: OrderItem[];

  @Field((type) => Date)
  createdAt: Date;

  @Field((type) => Date)
  updatedAt: Date;
}
