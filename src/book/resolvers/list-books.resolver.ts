import { Query, Resolver } from '@nestjs/graphql';
import { Book } from '../models/book.model';
import { ListBooksService } from '../services/list-books.service';

@Resolver((of) => Book)
export class ListBooksResolver {
  constructor(private listBooksService: ListBooksService) {}

  @Query((returns) => [Book])
  async books() {
    return this.listBooksService.list();
  }
}
