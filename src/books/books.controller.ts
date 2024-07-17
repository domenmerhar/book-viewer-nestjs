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
import { AddBookDto } from './dto/add-book.dto';
import { Book } from './book.entity';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  //TODO add filters
  @Get()
  getAllBooks(): Promise<Book[]> {
    return this.booksService.getAllBooks();
  }

  @Get('/:id')
  getBookById(@Param('id') id: string): Promise<Book> {
    return this.booksService.getBookById(id);
  }

  @Post()
  addBook(@Body() addBookDto: AddBookDto): Promise<Book> {
    return this.booksService.addBook(addBookDto);
  }

  @Patch('/:id')
  updateBook(@Param('id') id: string): string {
    return id;
  }

  @Patch('/:id/author')
  updateAuthor(): void {
    return null;
  }

  @Delete('/:id')
  deleteBook(@Param('id') id: string): void {
    return this.booksService.deleteBookById(id);
  }

  @Delete('/:id/author')
  deleteBookAuthor(): void {
    return null;
  }
}
