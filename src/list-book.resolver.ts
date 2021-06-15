import { Query, Resolver } from '@nestjs/graphql';
import { Book } from './book.model';
import { BooksService } from './books.service';

@Resolver(of => Book)
export class ListBookResolver {
  constructor(
    private booksService: BooksService,
  ) {}

  @Query(returns => [Book])
  async books() {
    return this.booksService.findAll();
  }
}