import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { UserRoleEnum } from '../../../user/enums/user.enum';

export class LoginInput {
  @ApiProperty({
    description: 'User email (must be registered)',
    example: 'john.doe@example.com',
  })
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase(), { toClassOnly: true })
  email: string;

  @ApiProperty({
    description: 'User password',
    minLength: 6,
    maxLength: 30,
    example: 'StrongP@ssw0rd!',
  })
  @MinLength(6)
  @MaxLength(30)
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'User role',
    enum: UserRoleEnum,
    example: UserRoleEnum.USER,
  })
  @IsEnum(UserRoleEnum)
  role: UserRoleEnum;
}
