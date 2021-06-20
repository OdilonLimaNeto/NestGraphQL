import { Test } from '@nestjs/testing';
import * as faker from 'faker';
import { CreateBookInput } from '../inputs/create-book.input';
import { book } from '../models/__mocks__/book.model';
import { BooksRepository } from '../repositories/books.repository';
import { CreateBookService } from './create-book.service';

jest.mock('../repositories/books.repository');

describe('CreateBookService', () => {
  let createBookService: CreateBookService;
  let booksRepository: BooksRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [CreateBookService, BooksRepository],
    }).compile();

    createBookService = moduleRef.get(CreateBookService);
    booksRepository = moduleRef.get(BooksRepository);
  });

  it('should create a book', async () => {
    const createBookInput: CreateBookInput = {
      title: faker.name.title(),
      author: faker.name.findName(),
    };
    expect(await createBookService.create(createBookInput)).toBe(book);
    expect(booksRepository.create).toHaveBeenCalledWith(createBookInput);
    expect(booksRepository.save).toHaveBeenCalledWith(createBookInput);
  });
});
