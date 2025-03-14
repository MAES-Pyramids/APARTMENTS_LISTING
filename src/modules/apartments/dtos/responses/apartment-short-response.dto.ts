import { Expose, Type } from 'class-transformer';
import {
  PropertyCategoryEnum,
  UnitTypeTypeEnum,
} from '../../enums/apartment.enum';
import { UnitAddressShortDto } from '../unit-address.dto';
import { UnitDetailsShortDto } from '../unit-details.dto';

export class ApartmentShortResponseDto {
  @Expose()
  id: string;

  @Expose()
  unitName: string;

  @Expose()
  averageRating: number;

  @Expose()
  available: boolean;

  @Expose()
  mainImage?: string;

  @Expose()
  unitType: UnitTypeTypeEnum;

  @Expose()
  propertyCategory: PropertyCategoryEnum;

  @Expose()
  rentingPrice: number;

  @Expose()
  description?: string;

  @Expose()
  @Type(() => UnitAddressShortDto)
  unitAddress: UnitAddressShortDto;

  @Expose()
  @Type(() => UnitDetailsShortDto)
  unitDetails: UnitDetailsShortDto;
}
