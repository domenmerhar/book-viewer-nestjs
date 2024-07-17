import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Author } from 'src/authors/author.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class AuthorsHelperRepository extends Repository<Author> {
  constructor(private dataSource: DataSource) {
    super(Author, dataSource.createEntityManager());
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
}
