import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CityEnum } from '../../enums/apartment.enum';

export class FilterApartmentsInput {
  @ApiPropertyOptional({
    description: 'Search keyword to filter apartments',
    example: 'Luxury',
  })
  @IsOptional()
  @IsString()
  searchKey?: string;

  @ApiPropertyOptional({
    description: 'Filter by city',
    enum: CityEnum,
    example: CityEnum.CAIRO,
  })
  @IsOptional()
  @IsEnum(CityEnum)
  city?: CityEnum;
}
