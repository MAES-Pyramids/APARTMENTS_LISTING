import { Expose } from 'class-transformer';
import { IsEnum, IsLatitude, IsLongitude, IsString } from 'class-validator';
import { CityEnum } from '../enums/apartment.enum';
import { PickType } from '@nestjs/mapped-types';

export class UnitAddress {
  @Expose()
  @IsString()
  fullAddress: string;

  @Expose()
  @IsEnum(CityEnum)
  city: CityEnum;

  @Expose()
  @IsString()
  district: string;

  @Expose()
  @IsLatitude()
  lat: number;

  @Expose()
  @IsLongitude()
  lng: number;
}

export class UnitAddressShortDto extends PickType(UnitAddress, [
  'fullAddress',
  'city',
] as const) {}
