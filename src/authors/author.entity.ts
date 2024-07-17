import { Book } from 'src/books/book.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Author {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  birthYear: number | null;

  @Column()
  deathYear: number | null;

  @OneToMany(() => Book, (book) => book.author, { eager: true })
  books: Book;
}
