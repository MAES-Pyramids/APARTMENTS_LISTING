import { Injectable } from '@nestjs/common';
import { HelperService } from '@src/libs/utils/helper/helper.service';
import { SignupInput } from '../../auth/dtos/inputs/signup.input';
import { User } from '../entities/user.entity';

@Injectable()
export class UserTransformer {
  constructor(private readonly helperService: HelperService) {}

  async registerAsUserTransformer(input: SignupInput): Promise<Partial<User>> {
    const { email, password, ...other } = input;

    return {
      ...other,
      verifiedEmail: email,
      password: await this.helperService.hashPassword(password),
    };
  }
}
