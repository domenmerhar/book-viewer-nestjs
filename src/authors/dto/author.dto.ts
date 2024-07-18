import {
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class AuthorDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumberString()
  @IsOptional()
  @IsNotEmpty()
  birthYear: number;

  @IsNumberString()
  @IsOptional()
  @IsNotEmpty()
  deathYear: number;
}
