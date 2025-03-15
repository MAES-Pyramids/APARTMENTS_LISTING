import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ApartmentIdInput {
  @ApiProperty({
    description: 'identifier for the apartment',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString()
  apartmentId: string;
}
