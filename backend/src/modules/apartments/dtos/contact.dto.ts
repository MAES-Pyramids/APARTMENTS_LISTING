import { Expose } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

export class ContactDetails {
  @Expose()
  @IsString()
  agentName: string;

  @Expose()
  @IsString()
  phone: string;

  @Expose()
  @IsEmail()
  email: string;
}
