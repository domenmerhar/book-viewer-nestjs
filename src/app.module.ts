import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
import { AuthorsController } from './authors/authors.controller';
import { AuthorsService } from './authors/authors.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'book-viewer',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [
    AppController,
    BooksController,
    AuthorsController,
    AuthController,
  ],
  providers: [AppService, BooksService, AuthorsService, AuthService],
})
export class AppModule {}
