import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Author } from './author.entity';
import { AuthorDto } from './dto/author.dto';
import { GetAuthorsFilter } from './dto/get-authors-filter.dto';

@Injectable()
export class AuthorsRepository extends Repository<Author> {
  constructor(private dataSource: DataSource) {
    super(Author, dataSource.createEntityManager());
  }

  async getAllAuthors(getAuthorsFilter: GetAuthorsFilter): Promise<Author[]> {
    const { search, year, sort } = getAuthorsFilter;

    const query = this.createQueryBuilder('author');

    if (search)
      query.andWhere('LOWER(author.name) LIKE :search', {
        search: `%${search}%`,
      });

    if (year)
      query.andWhere('author.birthYear < :year AND :year < author.deathYear', {
        year,
      });

    if (sort)
      query.orderBy('author.birthYear', sort.toUpperCase() as 'ASC' | 'DESC');

    const authors = await query.getMany();

    return authors;
  }

  async getAuthorById(id: string): Promise<Author> {
    let author;

    try {
      author = await this.findOneBy({ id });
    } catch (error) {
      throw new BadRequestException(error.message);
    }

    if (!author) throw new NotFoundException(`Author with id ${id} not found`);

    return author;
  }

  async createAuthor(authorDto: AuthorDto): Promise<Author> {
    const { name, birthYear, deathYear } = authorDto;

    const author = this.create({ name, birthYear, deathYear });
    await this.save(author);

    return author;
  }

  async updateAuthorName(name: string, id: string): Promise<Author> {
    let author: Author;

    try {
      author = await this.findOneBy({ id });
    } catch {
      throw new NotFoundException(`Author with id ${id} not found`);
    }

    author.name = name;

    await this.save(author);
    return author;
  }

  async deleteAuthor(id: string): Promise<void> {
    await this.delete({ id });
  }
}
