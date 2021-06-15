import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Book } from './book.model';
import { UpdateBookInput } from './update-book.input';
import { BooksService } from './books.service';

@Resolver((of) => Book)
export class UpdateBookResolver {
  constructor(private booksService: BooksService) {}

  @Mutation(() => Book)
  async updateBook(
    @Args('id') id: string,
    @Args('input') input: UpdateBookInput,
  ): Promise<Book> {
    return this.booksService.update(id, input);
  }
}
