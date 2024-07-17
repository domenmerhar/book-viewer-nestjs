import { Injectable, NotFoundException } from '@nestjs/common';
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
