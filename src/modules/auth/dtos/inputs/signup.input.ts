import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { UserRoleEnum } from '@modules/user/enums/user.enum';

export class SignupInput {
  @IsString()
  @MinLength(2)
  @MaxLength(15)
  firstName: string;

  @IsString()
  @MinLength(2)
  @MaxLength(15)
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase(), { toClassOnly: true })
  email: string;

  @IsStrongPassword()
  password: string;

  @IsNotEmpty()
  @IsEnum(UserRoleEnum)
  role: UserRoleEnum = UserRoleEnum.USER;
}
