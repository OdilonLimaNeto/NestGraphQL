import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Book } from '../models/book.model';
import { CreateBookInput } from '../inputs/create-book.input';
import { CreateBookService } from '../services/create-book.service';

@Resolver((of) => Book)
export class CreateBookResolver {
  constructor(private createBookService: CreateBookService) {}

  @Mutation(() => Book)
  async createBook(@Args('input') input: CreateBookInput): Promise<Book> {
    return this.createBookService.create(input);
  }
}
