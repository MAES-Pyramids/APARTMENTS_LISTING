import { IsEnum } from 'class-validator';
import { ApartmentSortByEnum } from '../../enums/apartment.enum';
import { SortTypeEnum } from '@libs/application/paginator/paginator.types';

export class SortApartmentInput {
  @IsEnum(ApartmentSortByEnum)
  sortBy?: ApartmentSortByEnum;

  @IsEnum(SortTypeEnum)
  sortType: SortTypeEnum;
}
