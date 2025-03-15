import { Expose } from 'class-transformer';
import { IsEnum, IsLatitude, IsLongitude, IsString } from 'class-validator';
import { CityEnum } from '../enums/apartment.enum';
import { PickType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class UnitAddress {
  @ApiProperty({ description: 'Full address of the unit' })
  @Expose()
  @IsString()
  fullAddress: string;

  @ApiProperty({
    description: 'City where the unit is located',
    enum: CityEnum,
  })
  @Expose()
  @IsEnum(CityEnum)
  city: CityEnum;

  @ApiProperty({ description: 'District where the unit is located' })
  @Expose()
  @IsString()
  district: string;

  @ApiProperty({ description: 'Latitude coordinate of the unit' })
  @Expose()
  @IsLatitude()
  lat: number;

  @ApiProperty({ description: 'Longitude coordinate of the unit' })
  @Expose()
  @IsLongitude()
  lng: number;
}

export class UnitAddressShortDto extends PickType(UnitAddress, [
  'fullAddress',
  'city',
] as const) {
  @ApiProperty({ description: 'Full address of the unit' })
  fullAddress: string;

  @ApiProperty({
    description: 'City where the unit is located',
    enum: CityEnum,
  })
  city: CityEnum;
}
