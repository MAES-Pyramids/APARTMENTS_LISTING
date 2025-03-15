import { Expose } from 'class-transformer';
import { UserResponse } from '../../../user/dtos/responses/user.response';
import { ApiProperty } from '@nestjs/swagger';

export class AuthResponse {
  @ApiProperty({
    description: 'Authenticated user details',
    type: UserResponse,
  })
  @Expose()
  user: UserResponse;

  @ApiProperty({
    description: 'JWT authentication token',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  @Expose()
  token: string;
}
