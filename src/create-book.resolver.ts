import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Book } from './book.model';
import { CreateBookInput } from './create-book.input';
import { BooksService } from './books.service';

@Resolver(of => Book)
export class CreateBookResolver {
  constructor(
    private booksService: BooksService,
  ) {}
  
  @Mutation(() => Book)
  async createBook(@Args('input') input: CreateBookInput): Promise<Book> {
    return this.booksService.create(input);
  }
}