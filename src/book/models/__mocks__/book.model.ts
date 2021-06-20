import * as faker from 'faker';
import { Book } from '../book.model';

export const book: Book = {
  id: faker.datatype.uuid(),
  title: faker.name.title(),
  author: faker.name.findName(),
};
