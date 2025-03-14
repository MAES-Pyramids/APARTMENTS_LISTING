import { IsEnum, IsOptional, IsString } from 'class-validator';
import { CityEnum } from '../../enums/apartment.enum';

export class FilterApartmentsInput {
  @IsOptional()
  @IsString()
  searchKey?: string;

  @IsOptional()
  @IsEnum(CityEnum)
  city?: CityEnum;
}
