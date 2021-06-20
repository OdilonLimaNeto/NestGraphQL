import { Test } from '@nestjs/testing';
import * as faker from 'faker';
import { BooksRepository } from '../repositories/books.repository';
import { DeleteBookService } from './delete-book.service';

jest.mock('../repositories/books.repository');

describe('DeleteBookService', () => {
  let deleteBookService: DeleteBookService;
  let booksRepository: BooksRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [DeleteBookService, BooksRepository],
    }).compile();

    deleteBookService = moduleRef.get(DeleteBookService);
    booksRepository = moduleRef.get(BooksRepository);
  });

  it('should delete a book', async () => {
    const bookId = faker.datatype.uuid();
    expect(await deleteBookService.delete(bookId)).toBe(true);
    expect(booksRepository.delete).toHaveBeenCalledWith(bookId);
  });
});
