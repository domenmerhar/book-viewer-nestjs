import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book } from './book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoooksRepository } from './books.repository';
import { AuthorsHelperRepository } from './authors-helper.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BooksController],
  providers: [BooksService, BoooksRepository, AuthorsHelperRepository],
})
export class BooksModule {}
