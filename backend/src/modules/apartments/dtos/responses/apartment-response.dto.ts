import { Expose, Type } from 'class-transformer';
import {
  UnitTypeTypeEnum,
  LeaseDurationEnum,
  PropertyCategoryEnum,
} from '../../enums/apartment.enum';
import { ContactDetails } from '../contact.dto';
import { UnitAddress } from '../unit-address.dto';
import { UnitDetails } from '../unit-details.dto';

export class ApartmentResponseDto {
  @Expose()
  id: string;

  @Expose()
  unitName: string;

  @Expose()
  unitNumber: string;

  @Expose()
  projectName: string;

  @Expose()
  available: boolean;

  @Expose()
  mainImage?: string;

  @Expose()
  imagesGallery?: string[];

  @Expose()
  @Type(() => UnitAddress)
  unitAddress: UnitAddress;

  @Expose()
  @Type(() => UnitDetails)
  unitDetails: UnitDetails;

  @Expose()
  @Type(() => ContactDetails)
  contactDetails: ContactDetails;

  @Expose()
  unitType: UnitTypeTypeEnum;

  @Expose()
  propertyCategory: PropertyCategoryEnum;

  @Expose()
  rentingPrice: number;

  @Expose()
  leaseDuration: LeaseDurationEnum;

  @Expose()
  description?: string;

  @Expose()
  averageRating: number;

  @Expose()
  reviewsCount: number;

  @Expose()
  watchCount: number;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
