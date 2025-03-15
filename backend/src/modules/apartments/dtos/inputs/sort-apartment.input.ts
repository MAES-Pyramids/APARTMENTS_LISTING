import { IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApartmentSortByEnum } from '../../enums/apartment.enum';
import { SortTypeEnum } from '@libs/application/paginator/paginator.types';

export class SortApartmentInput {
  @ApiProperty({
    description: 'Field to sort apartments by',
    enum: ApartmentSortByEnum,
    required: false,
  })
  @IsOptional()
  @IsEnum(ApartmentSortByEnum)
  sortBy?: ApartmentSortByEnum;

  @ApiProperty({
    description: 'Sort direction (ASC or DESC)',
    enum: SortTypeEnum,
    required: false,
  })
  @IsOptional()
  @IsEnum(SortTypeEnum)
  sortType?: SortTypeEnum;
}
