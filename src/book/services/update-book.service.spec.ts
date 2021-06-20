import { Test } from '@nestjs/testing';
import * as faker from 'faker';
import { book } from '../models/__mocks__/book.model';
import { UpdateBookInput } from '../inputs/update-book.input';
import { UpdateBookService } from './update-book.service';
import { BooksRepository } from '../repositories/books.repository';

jest.mock('../repositories/books.repository');

describe('UpdateBookService', () => {
  let updateBookService: UpdateBookService;
  let booksRepository: BooksRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [UpdateBookService, BooksRepository],
    }).compile();

    updateBookService = moduleRef.get(UpdateBookService);
    booksRepository = moduleRef.get(BooksRepository);
  });

  it('should update a book', async () => {
    const updateBookInput: UpdateBookInput = {
      title: faker.name.title(),
      author: faker.name.findName(),
    };
    expect(await updateBookService.update(book.id, updateBookInput)).toBe(book);
    expect(booksRepository.findOneOrFail).toHaveBeenCalledWith(book.id);
    expect(booksRepository.save).toHaveBeenCalledWith(
      Object.assign(book, updateBookInput),
    );
  });
});
