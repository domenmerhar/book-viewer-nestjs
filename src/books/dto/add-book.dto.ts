import {
  IsBooleanString,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class AddBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  subjects: string;

  @IsOptional()
  @IsString()
  author: string;

  @IsString()
  @IsNotEmpty()
  languages: string;

  @IsBooleanString()
  @IsNotEmpty()
  copyright: boolean;

  @IsNumberString()
  @IsNotEmpty()
  @IsOptional()
  year: number;
}
