import { Injectable } from '@nestjs/common';
import { Book } from '../models/book.model';
import { CreateBookInput } from '../inputs/create-book.input';
import { BooksRepository } from '../repositories/books.repository';

@Injectable()
export class CreateBookService {
  constructor(private booksRepository: BooksRepository) {}

  async create(createBookInput: CreateBookInput): Promise<Book> {
    const bookCreated = this.booksRepository.create(createBookInput);
    return this.booksRepository.save(bookCreated);
  }
}
