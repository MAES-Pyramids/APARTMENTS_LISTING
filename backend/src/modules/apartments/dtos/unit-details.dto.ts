import { PickType } from '@nestjs/mapped-types';
import { Expose } from 'class-transformer';
import { IsBoolean, IsInt, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UnitDetails {
  @ApiProperty({ description: 'Size of the unit in square meters' })
  @Expose()
  @IsNumber()
  unitSize: number;

  @ApiProperty({ description: 'Number of bedrooms in the unit' })
  @Expose()
  @IsInt()
  numberOfBedrooms: number;

  @ApiProperty({ description: 'Number of bathrooms in the unit' })
  @Expose()
  @IsInt()
  numberOfBathrooms: number;

  @ApiProperty({
    description: 'Indicates whether the building has an elevator',
  })
  @Expose()
  @IsBoolean()
  hasElevator: boolean;

  @ApiProperty({ description: 'Floor number of the unit' })
  @Expose()
  @IsInt()
  floorNumber: number;
}

export class UnitDetailsShortDto extends PickType(UnitDetails, [
  'unitSize',
  'numberOfBedrooms',
  'numberOfBathrooms',
] as const) {
  @ApiProperty({ description: 'Size of the unit in square meters' })
  unitSize: number;

  @ApiProperty({ description: 'Number of bedrooms in the unit' })
  numberOfBedrooms: number;

  @ApiProperty({ description: 'Number of bathrooms in the unit' })
  numberOfBathrooms: number;
}
