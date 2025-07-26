import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field((type) => Int)
  userId: number;

  @Field((type) => String)
  name: string;
}
