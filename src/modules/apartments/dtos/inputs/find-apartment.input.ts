import { IsString } from 'class-validator';

export class ApartmentIdInput {
  @IsString()
  apartmentId: string;
}
