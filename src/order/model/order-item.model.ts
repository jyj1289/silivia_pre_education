import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Order } from './order.model';
import { Product } from 'src/product/model/product.model';

@ObjectType()
export class OrderItem {
  @Field((type) => Order)
  order: Order;

  @Field((type) => Product)
  product: number;

  @Field((type) => Int)
  quantity: number;

  @Field((type) => Date)
  createdAt: Date;

  @Field((type) => Date)
  updatedAt: Date;
}
