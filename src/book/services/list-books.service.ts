import { Injectable } from '@nestjs/common';
import { Book } from '../models/book.model';
import { BooksRepository } from '../repositories/books.repository';

@Injectable()
export class ListBooksService {
  constructor(private booksRepository: BooksRepository) {}
  async list(): Promise<Book[]> {
    return this.booksRepository.find();
  }
}
