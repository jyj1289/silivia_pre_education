import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field((type) => Int)
  productId: number;

  @Field((type) => String)
  name: string;

  @Field((type) => Int)
  price: number;

  @Field((type) => Int)
  quantity: number;

  @Field((type) => Date)
  createdAt: Date;

  @Field((type) => Date)
  updatedAt: Date;
}
