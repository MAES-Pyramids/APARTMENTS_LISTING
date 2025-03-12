import { AdminOnlyGuard } from './admin.guard';
import { AppOnlyGuard } from './app.guard';
import { AuthenticatedGuard } from './auth.guard';

export const AuthGuards = {
  app: AppOnlyGuard,
  admin: AdminOnlyGuard,
  authenticated: AuthenticatedGuard,
} as const;
