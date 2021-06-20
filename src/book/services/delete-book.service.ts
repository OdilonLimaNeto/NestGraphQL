import { Injectable } from '@nestjs/common';
import { Book } from '../models/book.model';
import { BooksRepository } from '../repositories/books.repository';

@Injectable()
export class DeleteBookService {
  constructor(private booksRepository: BooksRepository) {}

  async delete(id: Book['id']): Promise<true> {
    await this.booksRepository.delete(id);
    return true;
  }
}
