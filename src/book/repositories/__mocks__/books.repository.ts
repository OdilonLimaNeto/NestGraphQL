import { book } from '../../models/__mocks__/book.model';

export class BooksRepository {
  save = jest.fn(() => book);
  findOneOrFail = jest.fn(() => book);
  delete = jest.fn();
  create = jest.fn((book) => book);
  find = jest.fn(() => [book]);
}
