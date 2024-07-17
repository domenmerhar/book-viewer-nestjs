import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Book } from './book.entity';
import { AddBookDto } from './dto/add-book.dto';

@Injectable()
export class BoooksRepository extends Repository<Book> {
  constructor(private dataSource: DataSource) {
    super(Book, dataSource.createEntityManager());
  }

  async addBook(addBookDto: AddBookDto): Promise<Book> {
    const {
      copyright,
      languages: languagesRaw,
      subjects: subjectsRaw,
      title,
    } = addBookDto;

    const languages: string[] = languagesRaw.split(',');
    const subjects: string[] = subjectsRaw.split(',');

    const toSave = { copyright, title, languages, subjects };
    let toReturn: Book;

    try {
      toReturn = await this.save(toSave);
    } catch {
      throw new BadRequestException('Cannot save book');
    }

    return toReturn;
  }
}
