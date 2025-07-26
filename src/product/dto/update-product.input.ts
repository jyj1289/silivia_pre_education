import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput {
  @Field((type) => Int)
  productId: number;

  @Field((type) => String)
  name: string;

  @Field((type) => Int)
  price: number;

  @Field((type) => Int)
  quantity: number;
}
