import { Expose, Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  PropertyCategoryEnum,
  UnitTypeTypeEnum,
} from '../../enums/apartment.enum';
import { UnitAddressShortDto } from '../unit-address.dto';
import { UnitDetailsShortDto } from '../unit-details.dto';

export class ApartmentShortResponseDto {
  @ApiProperty({ description: 'Unique identifier of the apartment' })
  @Expose()
  id: string;

  @ApiProperty({ description: 'Name of the unit' })
  @Expose()
  unitName: string;

  @ApiProperty({ description: 'Average rating of the apartment', example: 4.5 })
  @Expose()
  averageRating: number;

  @ApiProperty({ description: 'Availability status of the apartment' })
  @Expose()
  available: boolean;

  @ApiPropertyOptional({ description: 'Main image URL of the apartment' })
  @Expose()
  mainImage?: string;

  @ApiProperty({ description: 'Type of the unit', enum: UnitTypeTypeEnum })
  @Expose()
  unitType: UnitTypeTypeEnum;

  @ApiProperty({ description: 'Property category', enum: PropertyCategoryEnum })
  @Expose()
  propertyCategory: PropertyCategoryEnum;

  @ApiProperty({ description: 'Renting price of the apartment' })
  @Expose()
  rentingPrice: number;

  @ApiPropertyOptional({ description: 'Short description of the apartment' })
  @Expose()
  description?: string;

  @ApiProperty({
    description: 'Address details of the unit',
    type: UnitAddressShortDto,
  })
  @Expose()
  @Type(() => UnitAddressShortDto)
  unitAddress: UnitAddressShortDto;

  @ApiProperty({
    description: 'Brief details about the unit',
    type: UnitDetailsShortDto,
  })
  @Expose()
  @Type(() => UnitDetailsShortDto)
  unitDetails: UnitDetailsShortDto;
}
