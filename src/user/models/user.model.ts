import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => Int)
  userId: number;

  @Field((type) => String)
  name: string;

  @Field((type) => Int)
  amount: number;
}
