import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorDto } from './dto/author.dto';
import { Author } from './author.entity';

@Controller('authors')
export class AuthorsController {
  constructor(private authorsService: AuthorsService) {}

  @Get()
  getAllAuthors(): string {
    return 'All books';
  }

  @Get('/:id')
  getAuthorById(@Param('id') id: string): string {
    return id;
  }

  @Post()
  addAuthor(@Body() authorDto: AuthorDto): Promise<Author> {
    return this.authorsService.createAuthor(authorDto);
  }

  @Patch('/:id/name')
  updateAuthor(
    @Param('name') name,
    @Param('id') id: string,
  ): Promise<AuthorDto> {
    return this.authorsService.updateAuthorName(name, id);
  }

  @Delete('/:id')
  deleteAuthor(@Param('id') id: string): string {
    return id;
  }
}
