import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './author.entity';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { AuthorsRepository } from './authors.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  controllers: [AuthorsController],
  providers: [AuthorsService, AuthorsRepository],
})
export class AuthorsModule {}
