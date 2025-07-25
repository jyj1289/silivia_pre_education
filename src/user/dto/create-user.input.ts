import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field((type) => String)
  name: string;

  @Field((type) => Int)
  amount: number;
}
