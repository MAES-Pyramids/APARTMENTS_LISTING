import { PickType } from '@nestjs/mapped-types';
import { Expose } from 'class-transformer';
import { IsBoolean, IsInt, IsNumber } from 'class-validator';

export class UnitDetails {
  @Expose()
  @IsNumber()
  unitSize: number;

  @Expose()
  @IsInt()
  numberOfBedrooms: number;

  @Expose()
  @IsInt()
  numberOfBathrooms: number;

  @Expose()
  @IsBoolean()
  hasElevator: boolean;

  @Expose()
  @IsInt()
  floorNumber: number;
}

export class UnitDetailsShortDto extends PickType(UnitDetails, [
  'unitSize',
  'numberOfBedrooms',
  'numberOfBathrooms',
] as const) {}
