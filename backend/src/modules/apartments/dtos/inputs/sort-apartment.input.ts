import { IsEnum, IsOptional } from 'class-validator';
import { ApartmentSortByEnum } from '../../enums/apartment.enum';
import { SortTypeEnum } from '@libs/application/paginator/paginator.types';

export class SortApartmentInput {
  @IsOptional()
  @IsEnum(ApartmentSortByEnum)
  sortBy?: ApartmentSortByEnum;

  @IsOptional()
  @IsEnum(SortTypeEnum)
  sortType: SortTypeEnum;
}
