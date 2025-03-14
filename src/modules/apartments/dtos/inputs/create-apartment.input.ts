import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import {
  UnitTypeTypeEnum,
  LeaseDurationEnum,
  PropertyCategoryEnum,
} from '../../enums/apartment.enum';
import { ContactDetails } from '../contact.dto';
import { UnitAddress } from '../unit-address.dto';
import { UnitDetails } from '../unit-details.dto';

export class CreateApartmentInput {
  @IsString()
  unitName: string;

  @IsString()
  unitNumber: string;

  @IsString()
  projectName: string;

  @IsBoolean()
  available: boolean;

  @IsOptional()
  @IsString()
  mainImage?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  imagesGallery?: string[];

  @ValidateNested()
  @Type(() => UnitAddress)
  unitAddress: UnitAddress;

  @ValidateNested()
  @Type(() => UnitDetails)
  unitDetails: UnitDetails;

  @ValidateNested()
  @Type(() => ContactDetails)
  contactDetails: ContactDetails;

  @IsEnum(UnitTypeTypeEnum)
  unitType: UnitTypeTypeEnum;

  @IsEnum(PropertyCategoryEnum)
  propertyCategory: PropertyCategoryEnum;

  @IsNumber()
  rentingPrice: number;

  @IsEnum(LeaseDurationEnum)
  leaseDuration: LeaseDurationEnum;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  averageRating?: number;

  @IsOptional()
  @IsInt()
  reviewsCount?: number;

  @IsOptional()
  @IsInt()
  watchCount?: number;
}
