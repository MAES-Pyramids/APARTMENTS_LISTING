import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../libs/database/base.model';
import { DeepPartial } from '../../../libs/types/deep-partial.type';
import {
  LeaseDurationEnum,
  PropertyCategoryEnum,
  UnitTypeTypeEnum,
} from '../enums/apartment.enum';
import { ContactDetails } from '../dtos/contact.dto';
import { UnitAddress } from '../dtos/unit-address.dto';
import { UnitDetails } from '../dtos/unit-details.dto';

@Entity()
export class Apartment extends BaseModel {
  constructor(input?: DeepPartial<Apartment>) {
    super(input);
  }

  @Column({ type: 'text' })
  unitName: string;

  @Column({ type: 'text', unique: true })
  unitNumber: string;

  @Column({ type: 'text', unique: true })
  projectName: string;

  @Column({ type: 'boolean', default: true })
  available: boolean;

  @Column({ type: 'text', nullable: true })
  mainImage: string;

  @Column({ type: 'simple-array', nullable: true })
  imagesGallery: string[];

  @Column({ type: 'jsonb' })
  unitAddress: UnitAddress;

  @Column({ type: 'jsonb' })
  unitDetails: UnitDetails;

  @Column({ type: 'jsonb' })
  contactDetails: ContactDetails;

  @Column({ enum: UnitTypeTypeEnum })
  unitType: UnitTypeTypeEnum;

  @Column({ type: 'enum', enum: PropertyCategoryEnum })
  propertyCategory: PropertyCategoryEnum;

  @Column({ type: 'float' })
  rentingPrice: number;

  @Column({ enum: LeaseDurationEnum })
  leaseDuration: LeaseDurationEnum;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'float', default: 0 })
  averageRating: number;

  @Column({ type: 'int', default: 0 })
  reviewsCount: number;

  @Column({ type: 'int', default: 0 })
  watchCount: number;
}
