import { Injectable } from '@nestjs/common';
import { BoooksRepository } from './books.repository';
import { AddBookDto } from './dto/add-book.dto';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  constructor(private boooksRepository: BoooksRepository) {}

  getAllBooks(): Promise<Book[]> {
    return this.boooksRepository.getAllBooks();
  }

  addBook(addBookDto: AddBookDto): Promise<Book> {
    return this.boooksRepository.addBook(addBookDto);
  }
}
