import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  UnitTypeTypeEnum,
  LeaseDurationEnum,
  PropertyCategoryEnum,
} from '../../enums/apartment.enum';
import { ContactDetails } from '../contact.dto';
import { UnitAddress } from '../unit-address.dto';
import { UnitDetails } from '../unit-details.dto';

export class CreateApartmentInput {
  @ApiProperty({ description: 'Name of the unit', example: 'Luxury Apartment' })
  @IsString()
  unitName: string;

  @ApiProperty({ description: 'Number of the unit', example: 'A-101' })
  @IsString()
  unitNumber: string;

  @ApiProperty({ description: 'Name of the project', example: 'Palm Heights' })
  @IsString()
  projectName: string;

  @ApiProperty({ description: 'Availability status', example: true })
  @IsBoolean()
  available: boolean;

  @ApiPropertyOptional({
    description: 'Main image URL',
    example: 'https://example.com/image.jpg',
  })
  @IsOptional()
  @IsString()
  @IsUrl()
  mainImage?: string;

  @ApiPropertyOptional({
    description: 'Gallery images URLs',
    type: [String],
    example: ['https://example.com/img1.jpg', 'https://example.com/img2.jpg'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @IsUrl({}, { each: true })
  imagesGallery?: string[];

  @ApiProperty({ description: 'Address details', type: UnitAddress })
  @ValidateNested()
  @Type(() => UnitAddress)
  unitAddress: UnitAddress;

  @ApiProperty({ description: 'Unit details', type: UnitDetails })
  @ValidateNested()
  @Type(() => UnitDetails)
  unitDetails: UnitDetails;

  @ApiProperty({ description: 'Contact details', type: ContactDetails })
  @ValidateNested()
  @Type(() => ContactDetails)
  contactDetails: ContactDetails;

  @ApiProperty({
    description: 'Type of unit',
    enum: UnitTypeTypeEnum,
    example: UnitTypeTypeEnum.APARTMENT,
  })
  @IsEnum(UnitTypeTypeEnum)
  unitType: UnitTypeTypeEnum;

  @ApiProperty({
    description: 'Property category',
    enum: PropertyCategoryEnum,
    example: PropertyCategoryEnum.RESIDENTIAL,
  })
  @IsEnum(PropertyCategoryEnum)
  propertyCategory: PropertyCategoryEnum;

  @ApiProperty({ description: 'Renting price', example: 1500 })
  @IsNumber()
  rentingPrice: number;

  @ApiProperty({
    description: 'Lease duration',
    enum: LeaseDurationEnum,
    example: LeaseDurationEnum.MONTHLY,
  })
  @IsEnum(LeaseDurationEnum)
  leaseDuration: LeaseDurationEnum;

  @ApiPropertyOptional({
    description: 'Description of the unit',
    example: 'A spacious 2BHK apartment with sea view.',
  })
  @IsOptional()
  @IsString()
  description?: string;
}
