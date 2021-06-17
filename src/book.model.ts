import { Field, ObjectType } from '@nestjs/graphql';
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@ObjectType()
@Entity()
export class Book {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  author: string;
}


