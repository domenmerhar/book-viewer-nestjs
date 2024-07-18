import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { SortEnum } from '../sort.enum';

@ValidatorConstraint({ name: 'IsSortString', async: false })
export class IsSortString implements ValidatorConstraintInterface {
  validate(text: string) {
    return text === SortEnum.ASC || text === SortEnum.DESC;
  }

  defaultMessage() {
    // here you can provide default error message if validation failed
    return 'Sort should countain the value asc or desc';
  }
}
