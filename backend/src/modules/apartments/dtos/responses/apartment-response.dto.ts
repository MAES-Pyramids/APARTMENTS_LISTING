import { Expose, Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  UnitTypeTypeEnum,
  LeaseDurationEnum,
  PropertyCategoryEnum,
} from '../../enums/apartment.enum';
import { ContactDetails } from '../contact.dto';
import { UnitAddress } from '../unit-address.dto';
import { UnitDetails } from '../unit-details.dto';

export class ApartmentResponseDto {
  @ApiProperty({ description: 'Unique identifier of the apartment' })
  @Expose()
  id: string;

  @ApiProperty({ description: 'Name of the unit' })
  @Expose()
  unitName: string;

  @ApiProperty({ description: 'Unit number' })
  @Expose()
  unitNumber: string;

  @ApiProperty({ description: 'Name of the project this unit belongs to' })
  @Expose()
  projectName: string;

  @ApiProperty({ description: 'Availability status of the apartment' })
  @Expose()
  available: boolean;

  @ApiPropertyOptional({ description: 'Main image URL of the apartment' })
  @Expose()
  mainImage?: string;

  @ApiPropertyOptional({
    description: 'Gallery of images related to the apartment',
    type: [String],
  })
  @Expose()
  imagesGallery?: string[];

  @ApiProperty({
    description: 'Address details of the unit',
    type: UnitAddress,
  })
  @Expose()
  @Type(() => UnitAddress)
  unitAddress: UnitAddress;

  @ApiProperty({
    description: 'Detailed information about the unit',
    type: UnitDetails,
  })
  @Expose()
  @Type(() => UnitDetails)
  unitDetails: UnitDetails;

  @ApiProperty({
    description: 'Contact details of the property owner or agent',
    type: ContactDetails,
  })
  @Expose()
  @Type(() => ContactDetails)
  contactDetails: ContactDetails;

  @ApiProperty({ description: 'Type of the unit', enum: UnitTypeTypeEnum })
  @Expose()
  unitType: UnitTypeTypeEnum;

  @ApiProperty({ description: 'Property category', enum: PropertyCategoryEnum })
  @Expose()
  propertyCategory: PropertyCategoryEnum;

  @ApiProperty({ description: 'Renting price of the apartment' })
  @Expose()
  rentingPrice: number;

  @ApiProperty({ description: 'Lease duration type', enum: LeaseDurationEnum })
  @Expose()
  leaseDuration: LeaseDurationEnum;

  @ApiPropertyOptional({ description: 'Description of the apartment' })
  @Expose()
  description?: string;

  @ApiProperty({ description: 'Average rating of the apartment', example: 4.5 })
  @Expose()
  averageRating: number;

  @ApiProperty({ description: 'Total number of reviews for the apartment' })
  @Expose()
  reviewsCount: number;

  @ApiProperty({ description: 'Number of times apartment has been watched' })
  @Expose()
  watchCount: number;

  @ApiProperty({
    description: 'Date when the apartment was created',
    example: '2024-03-15T12:00:00.000Z',
  })
  @Expose()
  createdAt: Date;

  @ApiProperty({
    description: 'Last updated date of the apartment',
    example: '2024-03-16T14:30:00.000Z',
  })
  @Expose()
  updatedAt: Date;
}
