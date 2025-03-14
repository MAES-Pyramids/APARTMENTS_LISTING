import { AdminOnlyGuard } from './admin.guard';
import { AuthenticatedGuard } from './auth.guard';

export const AuthGuards = {
  admin: AdminOnlyGuard,
  authenticated: AuthenticatedGuard,
} as const;
