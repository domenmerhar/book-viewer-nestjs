import { Injectable } from '@nestjs/common';
import { AuthorDto } from './dto/author.dto';
import { AuthorsRepository } from './authors.repository';
import { Author } from './author.entity';
import { GetAuthorsFilter } from './dto/get-authors-filter.dto';

@Injectable()
export class AuthorsService {
  constructor(private authorsRepository: AuthorsRepository) {}

  async getAllAuthors(getAuthorsFilter: GetAuthorsFilter): Promise<Author[]> {
    return this.authorsRepository.getAllAuthors(getAuthorsFilter);
  }

  getAuthorById(id: string): Promise<Author> {
    return this.authorsRepository.getAuthorById(id);
  }

  createAuthor(authorDto: AuthorDto): Promise<Author> {
    return this.authorsRepository.createAuthor(authorDto);
  }

  updateAuthorName(name: string, id: string): Promise<Author> {
    return this.authorsRepository.updateAuthorName(name, id);
  }

  deleteAuthor(id: string): Promise<void> {
    return this.authorsRepository.deleteAuthor(id);
  }
}
