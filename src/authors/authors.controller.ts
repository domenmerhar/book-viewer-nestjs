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
  addAuthor(@Body('name') name: string): string {
    return name;
  }

  @Patch('/:id')
  updateAuthor(@Param('id') id: string): string {
    return id;
  }

  @Delete('/:id')
  deleteAuthor(@Param('id') id: string): string {
    return id;
  }
}
