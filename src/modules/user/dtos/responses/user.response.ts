import { Expose } from 'class-transformer';
import { UserRoleEnum } from '../../enums/user.enum';

export class UserResponse {
  @Expose()
  id: string;

  @Expose()
  role: UserRoleEnum;

  @Expose()
  verifiedEmail: string;

  @Expose()
  unVerifiedEmail: string;
}
