import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { ErrorCodeEnum } from '../application/exceptions/error-code.enum';
import { MediatorGuard } from '../guards/auth.guards/mediator.guard';
import { AuthGuards } from '../guards/auth.guards/permission-guards';
import { JwtAuthenticationGuard } from '../guards/strategy.guards/jwt.guard';

export interface AuthOpts {
  allow?: keyof typeof AuthGuards;
  error?: ErrorCodeEnum;
}

export const SetAuthOpts = (opts: AuthOpts) => SetMetadata('authOpts', opts);

export const Auth = (opts: AuthOpts = { allow: 'authenticated' }) =>
  applyDecorators(
    SetMetadata('authOpts', opts),
    UseGuards(JwtAuthenticationGuard, MediatorGuard),
  );
