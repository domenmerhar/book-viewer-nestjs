import { Injectable } from '@nestjs/common';
import { AuthorDto } from './dto/author.dto';
import { AuthorsRepository } from './authors.repository';
import { Author } from './author.entity';

@Injectable()
export class AuthorsService {
  constructor(private authorsRepository: AuthorsRepository) {}

  createAuthor(authorDto: AuthorDto): Promise<Author> {
    return this.authorsRepository.createAuthor(authorDto);
  }

  updateAuthorName(name: string, id: string): Promise<Author> {
    return this.authorsRepository.updateAuthorName(name, id);
  }
}
