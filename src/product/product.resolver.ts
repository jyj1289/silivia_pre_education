import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './model/product.model';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product], { name: 'product' })
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('createProductInput') input: CreateProductInput,
  ): Promise<Product> {
    return this.productService.create(input);
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('updateProductInput') input: UpdateProductInput,
  ): Promise<Product> {
    return this.productService.update(input);
  }

  @Mutation(() => Product)
  async deleteProduct(@Args('productId', { type: () => Int }) id: number) {
    return this.productService.delete(id);
  }
}
