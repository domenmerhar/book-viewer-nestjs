import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Author } from './author.entity';
import { AuthorDto } from './dto/author.dto';

@Injectable()
export class AuthorsRepository extends Repository<Author> {
  constructor(private dataSource: DataSource) {
    super(Author, dataSource.createEntityManager());
  }

  async createAuthor(authorDto: AuthorDto): Promise<Author> {
    const { name, birthYear, deathYear } = authorDto;

    const author = this.create({ name, birthYear, deathYear });
    await this.save(author);

    return author;
  }

  async updateAuthorName(name: string, id: string): Promise<Author> {
    const author = await this.findOneBy({ id });
    console.log(author);

    author.name = name;

    await this.save(author);

    return author;
  }
}
