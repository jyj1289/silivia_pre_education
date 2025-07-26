import { Field, InputType, Int } from '@nestjs/graphql';
import { CreateOrderItemInput } from './create-order-item.input';

@InputType()
export class CreateOrderInput {
  @Field((type) => [CreateOrderItemInput])
  items: CreateOrderItemInput[];
}
