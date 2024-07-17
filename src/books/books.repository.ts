import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Book } from './book.entity';
import { AddBookDto } from './dto/add-book.dto';

@Injectable()
export class BoooksRepository extends Repository<Book> {
  constructor(private dataSource: DataSource) {
    super(Book, dataSource.createEntityManager());
  }

  async getAllBooks(): Promise<Book[]> {
    const query = this.createQueryBuilder('books');

    return query.getMany();
  }

  async addBook(addBookDto: AddBookDto): Promise<Book> {
    const {
      copyright,
      languages: languagesRaw,
      subjects: subjectsRaw,
      title,
    } = addBookDto;

    const languages: string[] = languagesRaw
      .split(',')
      .map((language: string) => language.trim());
    const subjects: string[] = subjectsRaw
      .split(',')
      .map((subject: string) => subject.trim());

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
