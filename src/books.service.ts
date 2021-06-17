import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.model';
import { CreateBookInput } from './create-book.input';
import { UpdateBookInput } from './update-book.input';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  async create(createBookInput: CreateBookInput): Promise<Book> {
    const bookCreated = this.booksRepository.create(createBookInput);
    return this.booksRepository.save(bookCreated);
  }

  async update(id: string, input: UpdateBookInput): Promise<Book> {
    const book = await this.booksRepository.findOneOrFail(id);
    const bookUpdated = Object.assign(book, input);
    return this.booksRepository.save(bookUpdated);
  }
}
