import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: true }),
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
    BookModule,
  ],
})
export class AppModule {}
