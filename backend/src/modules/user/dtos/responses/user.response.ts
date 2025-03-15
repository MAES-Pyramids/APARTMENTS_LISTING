import { Expose } from 'class-transformer';
import { UserRoleEnum } from '../../enums/user.enum';
import { ApiProperty } from '@nestjs/swagger';

export class UserResponse {
  @ApiProperty({
    description: 'Unique identifier of the user',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @Expose()
  id: string;

  @ApiProperty({
    description: 'Role of the user',
    enum: UserRoleEnum,
    example: UserRoleEnum.USER,
  })
  @Expose()
  role: UserRoleEnum;

  @ApiProperty({
    description: 'Verified email of the user',
    example: 'user@example.com',
  })
  @Expose()
  verifiedEmail: string;
}
