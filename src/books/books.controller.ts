import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  //TODO add filters
  @Get()
  getAllBooks(): string {
    return 'All books';
  }

  @Get('/:id')
  getBookById(@Param('id') id: string): string {
    return id;
  }

  @Post()
  addBook(@Body('name') name: string): string {
    return name;
  }

  @Patch('/:id')
  updateBook(@Param('id') id: string): string {
    return id;
  }

  @Delete('/:id')
  deleteBook(@Param('id') id: string): string {
    return id;
  }
}
