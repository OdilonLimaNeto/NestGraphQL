import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Book } from '../models/book.model';
import { DeleteBookService } from '../services/delete-book.service';

@Resolver((of) => Book)
export class DeleteBookResolver {
  constructor(private deletebookService: DeleteBookService) {}

  @Mutation(() => Boolean)
  async deleteBook(@Args('id') id: string): Promise<true> {
    return this.deletebookService.delete(id);
  }
}
