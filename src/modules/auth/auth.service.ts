import { get } from 'env-var';
import { UserRoleEnum } from '../user/enums/user.enum';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { SignupInput } from './dtos/inputs/signup.input';
import { Session } from '../session/entities/session.entity';
import { BaseRepository } from '../../libs/types/base-repository';
import { UserTransformer } from '../user/transformer/user.transformer';
import { TokenPayload } from '../../libs/types/auth-token-payload.type';
import { ErrorCodeEnum } from '../../libs/application/exceptions/error-code.enum';
import { BaseHttpException } from '../../libs/application/exceptions/base-http-exception';
import { InjectBaseRepository } from '../../libs/decorators/inject-base-repository.decorator';
import { HelperService } from '../../libs/utils/helper/helper.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly helperService: HelperService,
    private readonly userTransformer: UserTransformer,
    @InjectBaseRepository(User)
    private readonly userRepo: BaseRepository<User>,
  ) {}

  async signup(input: SignupInput) {
    const { email } = input;
    await this.userService.errorIfUserExists(email);

    const data = await this.userTransformer.registerAsUserTransformer(input);
    const user = await this.userRepo.createOne(data);

    return user;
  }

  async validateUser(email: string, password: string, role: UserRoleEnum) {
    const user = await this.userService.getLoginUserOrError({
      verifiedEmail: email,
      role,
    });
    if (!user.password) throw new BaseHttpException(ErrorCodeEnum.NO_PASSWORD);
    await this.matchPassword(password, user.password);
    return user;
  }

  async appendAuthTokenToResponse(user: User, session: Session) {
    return {
      user,
      token: this.generateAuthToken({ userId: user.id, sessionId: session.id }),
    };
  }

  private async matchPassword(password: string, hash: string) {
    const isMatched = await bcrypt.compare(password, hash);
    if (!isMatched) {
      throw new BaseHttpException(ErrorCodeEnum.INVALID_EMAIL_OR_PASSWORD);
    }
  }

  private generateAuthToken(
    payload: TokenPayload,
    isTemporary = false,
  ): string {
    return jwt.sign(payload, get('JWT_SECRET').required().asString(), {
      algorithm: 'RS256',
      ...(isTemporary && { expiresIn: 30 * 60 }),
    });
  }
}
