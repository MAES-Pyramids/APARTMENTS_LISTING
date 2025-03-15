import { Expose } from 'class-transformer';
import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ContactDetails {
  @ApiProperty({
    description: 'Name of the agent responsible for the property',
  })
  @Expose()
  @IsString()
  agentName: string;

  @ApiProperty({ description: 'Phone number of the agent' })
  @Expose()
  @IsString()
  phone: string;

  @ApiProperty({ description: 'Email address of the agent' })
  @Expose()
  @IsEmail()
  email: string;
}
