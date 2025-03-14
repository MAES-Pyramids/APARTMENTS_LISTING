import { Injectable } from '@nestjs/common';
import { InjectBaseRepository } from '../../libs/decorators/inject-base-repository.decorator';
import { User } from './entities/user.entity';
import { BaseRepository, WhereOptions } from '../../libs/types/base-repository';
import { BaseHttpException } from '../../libs/application/exceptions/base-http-exception';
import { ErrorCodeEnum } from '../../libs/application/exceptions/error-code.enum';
import { FindOptionsWhere } from 'typeorm';
import { UserRoleEnum } from './enums/user.enum';
import { get } from 'env-var';
import { HelperService } from '../../libs/utils/helper/helper.service';

@Injectable()
export class UserService {
  constructor(
    @InjectBaseRepository(User)
    private readonly userRepo: BaseRepository<User>,

    private readonly helperService: HelperService,
  ) {}

  async seedAdmins() {
    const superAdmin = await this.userRepo.findOne({
      role: UserRoleEnum.ADMIN,
    });

    if (!superAdmin) {
      const APP_NAME = get('APP_NAME').asString() || 'NAWY';

      const plainPassword = `${APP_NAME}@123456`;
      const verifiedEmail = `admin@${APP_NAME}.com`;

      const password = await this.helperService.hashPassword(plainPassword);
      await this.userRepo.createOne({
        firstName: 'Abo El-Seoud',
        lastName: 'Admin',
        verifiedEmail,
        password,
        isBlocked: false,
        role: UserRoleEnum.ADMIN,
      });
    }

    return true;
  }

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
