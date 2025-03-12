import { Injectable } from '@nestjs/common';
import { InjectBaseRepository } from '../../libs/decorators/inject-base-repository.decorator';
import { User } from './entities/user.entity';
import { BaseRepository, WhereOptions } from '../../libs/types/base-repository';
import { UserTransformer } from './transformer/user.transformer';
import { BaseHttpException } from '../../libs/application/exceptions/base-http-exception';
import { ErrorCodeEnum } from '../../libs/application/exceptions/error-code.enum';
import { FindOptionsWhere } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectBaseRepository(User)
    private readonly userRepo: BaseRepository<User>,

    private readonly userTransformer: UserTransformer,
  ) {}

  async getLoginUserOrError(
    filter: FindOptionsWhere<User>[] | WhereOptions<User>,
  ) {
    const user = await this.userRepo.findOneOrError(
      filter,
      ErrorCodeEnum.INVALID_EMAIL_OR_PASSWORD,
    );
    if (user.isBlocked) throw new BaseHttpException(ErrorCodeEnum.BLOCKED_USER);
    return user;
  }

  async errorIfUserExists(email: string) {
    const user = await this.userRepo.findOne({ verifiedEmail: email });
    if (user) throw new BaseHttpException(ErrorCodeEnum.EMAIL_ALREADY_EXISTS);
  }
}
