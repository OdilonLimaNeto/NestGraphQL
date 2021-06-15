import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Book } from './book.model';
import { CreateBookInput } from './create-book.input';
import { UpdateBookInput } from './update-book.input';

@Injectable()
export class BooksService {
  private readonly books: Book[] = [];

  findAll(): Book[] {
    return this.books;
  }

  create(createBookInput: CreateBookInput): Book {
    const book: Book = { ...createBookInput, id: uuidv4() };
    this.books.push(book);
    return book;
  }

  update(id: string, input: UpdateBookInput): Book {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    const book = this.books[bookIndex];
    const updatedBook = Object.assign(book, input);
    this.books[bookIndex] = updatedBook;
    return updatedBook;
  }
}
