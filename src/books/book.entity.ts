import { Author } from 'src/authors/author.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;

  @Column('varchar', { array: true })
  subjects: string[];

  @Column('varchar', { array: true })
  languages: string[];

  @Column()
  copyright: boolean;

  @Column()
  year: number;
}
