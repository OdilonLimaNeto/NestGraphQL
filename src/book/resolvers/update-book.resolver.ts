import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Book } from '../models/book.model';
import { UpdateBookInput } from '../inputs/update-book.input';
import { UpdateBookService } from '../services/update-book.service';

@Resolver((of) => Book)
export class UpdateBookResolver {
  constructor(private updatebookService: UpdateBookService) {}

  @Mutation(() => Book)
  async updateBook(
    @Args('id') id: string,
    @Args('input') input: UpdateBookInput,
  ): Promise<Book> {
    return this.updatebookService.update(id, input);
  }
}
