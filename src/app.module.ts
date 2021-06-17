import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ListBookResolver } from './list-book.resolver';
import { BooksService } from './books.service';
import { CreateBookResolver } from './create-book.resolver';
import { UpdateBookResolver } from './update-book.resolver';
import { Book } from './book.model';

@Module({
  imports: [GraphQLModule.forRoot({ autoSchemaFile: true }), 
     TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'Leonardo',
    password: 'leotaghos',
    database: 'Book',
    autoLoadEntities: true,
    synchronize: true,
  }), 
  TypeOrmModule.forFeature([Book])
  ],

  providers: [
    BooksService,
    ListBookResolver,
    CreateBookResolver,
    UpdateBookResolver,
  ],
})
export class AppModule {}
