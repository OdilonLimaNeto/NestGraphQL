import { Test } from '@nestjs/testing';
import { ListBooksService } from './list-books.service';
import { BooksRepository } from '../repositories/books.repository';
import { book } from '../models/__mocks__/book.model';

jest.mock('../repositories/books.repository');

describe('ListBooksService', () => {
  let listBookService: ListBooksService;
  let booksRepository: BooksRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [ListBooksService, BooksRepository],
    }).compile();

    listBookService = moduleRef.get(ListBooksService);
    booksRepository = moduleRef.get(BooksRepository);
  });

  it('should list a book', async () => {
    expect(await listBookService.list()).toEqual([book]);
    expect(booksRepository.find).toHaveBeenCalled();
  });
});
