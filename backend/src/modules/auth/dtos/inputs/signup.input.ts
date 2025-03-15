import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MinLength,
  MaxLength,
  IsNotEmpty,
  IsEmail,
  IsEnum,
  IsStrongPassword,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { UserRoleEnum } from '../../../user/enums/user.enum';

export class SignupInput {
  @ApiProperty({
    description: 'User first name',
    minLength: 2,
    maxLength: 15,
    example: 'John',
  })
  @IsString()
  @MinLength(2)
  @MaxLength(15)
  firstName: string;

  @ApiProperty({
    description: 'User last name',
    minLength: 2,
    maxLength: 15,
    example: 'Doe',
  })
  @IsString()
  @MinLength(2)
  @MaxLength(15)
  lastName: string;

  @ApiProperty({
    description: 'User email (must be unique)',
    example: 'john.doe@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase(), { toClassOnly: true })
  email: string;

  @ApiProperty({
    description: 'User password (must be strong)',
    example: 'StrongP@ssw0rd!',
  })
  @IsStrongPassword()
  password: string;

  @ApiProperty({
    description: 'User role',
    enum: UserRoleEnum,
    example: UserRoleEnum.USER,
  })
  @IsNotEmpty()
  @IsEnum(UserRoleEnum)
  role: UserRoleEnum = UserRoleEnum.USER;
}
