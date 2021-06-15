import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ListBookResolver } from './list-book.resolver';
import { BooksService } from './books.service';
import { CreateBookResolver } from './create-book.resolver';
import { UpdateBookResolver } from './update-book.resolver';

@Module({
  imports: [GraphQLModule.forRoot({ autoSchemaFile: true })],
  providers: [
    BooksService,
    ListBookResolver,
    CreateBookResolver,
    UpdateBookResolver,
  ],
})
export class AppModule {}
