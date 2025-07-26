import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateOrderItemInput {
  @Field((type) => Int)
  productId: number;

  @Field((type) => Int)
  quantity: number;
}
