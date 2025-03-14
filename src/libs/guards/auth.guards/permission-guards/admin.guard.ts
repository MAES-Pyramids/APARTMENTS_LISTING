import { ExecutionContext } from '@nestjs/common';
import { ErrorCodeEnum } from '@src/libs/application/exceptions/error-code.enum';
import { BaseHttpException } from '@src/libs/application/exceptions/base-http-exception';
import { IAuthGuard } from './.auth-guard.interface';
import { IContextAuthService } from '@src/libs/application/context/context-auth.interface';
import { AuthOpts } from '@src/libs/decorators/auth.decorator';
import { UserRoleEnum } from '../../../../modules/user/enums/user.enum';

export class AdminOnlyGuard implements IAuthGuard {
  constructor(
    public readonly authOpts: AuthOpts,
    public readonly authService: IContextAuthService,
  ) {}

  unauthorizedException = new BaseHttpException(ErrorCodeEnum.UNAUTHORIZED);
  //TODO: I didn't handle admins permissions and security groups due to time constrains
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { error } = this.authOpts;

    const request = context.switchToHttp().getRequest();
    const user = request?.user;

    const unauthorizedException = error
      ? new BaseHttpException(error)
      : this.unauthorizedException;

    if (user?.role !== UserRoleEnum.ADMIN) throw unauthorizedException;

    return true;
  }
}
