import { Injectable } from '@nestjs/common';
import { UpdateBookInput } from '../inputs/update-book.input';
import { Book } from '../models/book.model';
import { BooksRepository } from '../repositories/books.repository';

@Injectable()
export class UpdateBookService {
  constructor(private booksRepository: BooksRepository) {}

  async update(id: Book['id'], input: UpdateBookInput): Promise<Book> {
    const book = await this.booksRepository.findOneOrFail(id);
    const bookUpdated = Object.assign<Book, UpdateBookInput>(book, input);
    return this.booksRepository.save(bookUpdated);
  }
}
