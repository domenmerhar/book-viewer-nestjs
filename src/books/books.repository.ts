import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Book } from './book.entity';
import { AddBookDto } from './dto/add-book.dto';
import { AuthorsHelperRepository } from './authors-helper.repository';

@Injectable()
export class BoooksRepository extends Repository<Book> {
  constructor(
    private dataSource: DataSource,
    private authorsHelperRepository: AuthorsHelperRepository,
  ) {
    super(Book, dataSource.createEntityManager());
  }

  async getBookById(id: string): Promise<Book> {
    let book;

    try {
      book = this.findOneBy({ id });
    } catch {
      throw new BadRequestException();
    }

    if (!book) throw new NotFoundException(`Book with id ${id} not found`);
    return book;
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
      year,
      author: authorId,
    } = addBookDto;

    const languages: string[] = languagesRaw
      .split(',')
      .map((language: string) => language.trim());
    const subjects: string[] = subjectsRaw
      .split(',')
      .map((subject: string) => subject.trim());

    const author =
      (await this.authorsHelperRepository.findOneBy({ id: authorId })) || null;

    const toSave = { copyright, title, languages, subjects, year, author };
    let toReturn: Book;

    try {
      toReturn = await this.save(toSave);
    } catch {
      throw new BadRequestException('Cannot save book');
    }

    return toReturn;
  }

  deleteBookById(id: string): void {
    this.delete({ id });
  }
}
