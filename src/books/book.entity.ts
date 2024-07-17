import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  //TODO: author

  @Column('varchar', { array: true })
  subjects: string[];

  @Column('varchar', { array: true })
  languages: string[];

  @Column()
  copyright: boolean;
}
