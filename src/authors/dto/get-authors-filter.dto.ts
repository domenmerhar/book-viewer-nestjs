import {
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  Validate,
} from 'class-validator';
import { SortEnum } from '../sort.enum';
import { IsSortString } from '../validators/is-sort-string';

export class GetAuthorsFilter {
  @IsNotEmpty()
  @IsOptional()
  search: string;

  @IsNumberString()
  @IsOptional()
  year: number;

  @Validate(IsSortString)
  @IsOptional()
  sort: SortEnum;
}
