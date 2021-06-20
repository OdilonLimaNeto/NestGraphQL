import { EntityRepository, Repository } from 'typeorm';
import { Book } from '../models/book.model';

@EntityRepository(Book)
export class BooksRepository extends Repository<Book> {}
