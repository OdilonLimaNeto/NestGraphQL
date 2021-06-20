import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksRepository } from './repositories/books.repository';
import { CreateBookResolver } from './resolvers/create-book.resolver';
import { DeleteBookResolver } from './resolvers/delete-book.resolver';
import { ListBooksResolver } from './resolvers/list-books.resolver';
import { UpdateBookResolver } from './resolvers/update-book.resolver';
import { CreateBookService } from './services/create-book.service';
import { DeleteBookService } from './services/delete-book.service';
import { ListBooksService } from './services/list-books.service';
import { UpdateBookService } from './services/update-book.service';

@Module({
  imports: [TypeOrmModule.forFeature([BooksRepository])],
  providers: [
    CreateBookService,
    CreateBookResolver,
    DeleteBookService,
    DeleteBookResolver,
    ListBooksService,
    ListBooksResolver,
    UpdateBookService,
    UpdateBookResolver,
  ],
})
export class BookModule {}
