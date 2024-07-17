import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BoooksRepository extends Repository<Book> {
  constructor(private dataSource: DataSource) {
    super(Book, dataSource.createEntityManager());
  }
}
