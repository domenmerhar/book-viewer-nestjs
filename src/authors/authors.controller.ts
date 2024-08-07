import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorDto } from './dto/author.dto';
import { Author } from './author.entity';
import { GetAuthorsFilter } from './dto/get-authors-filter.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private authorsService: AuthorsService) {}

  @Get()
  getAllAuthors(
    @Query() getAuthorsFilter: GetAuthorsFilter,
  ): Promise<Author[]> {
    return this.authorsService.getAllAuthors(getAuthorsFilter);
  }

  @Get('/:id')
  getAuthorById(@Param('id') id: string): Promise<Author> {
    return this.authorsService.getAuthorById(id);
  }

  @Post()
  addAuthor(@Body() authorDto: AuthorDto): Promise<Author> {
    return this.authorsService.createAuthor(authorDto);
  }

  @Patch('/:id/name')
  updateAuthor(
    @Body('name') name,
    @Param('id') id: string,
  ): Promise<AuthorDto> {
    return this.authorsService.updateAuthorName(name, id);
  }

  @Delete('/:id')
  deleteAuthor(@Param('id') id: string): Promise<void> {
    return this.authorsService.deleteAuthor(id);
  }
}
