import { IErrorMessage } from '../error-messages-interface';

export const enErrorMessage: IErrorMessage = {
  UNAUTHORIZED: 'You do not have permission to access this resource.',
  BLOCKED_USER: 'Your account has been blocked. Please contact support.',
  MAX_FILE_COUNT_EXCEEDED: 'The maximum number of files has been exceeded.',
  FILE_NEEDED_ERROR: 'At least one file is required to proceed.',
  FILE_EXTENSION_ERROR: 'Invalid file format. Upload a supported file type.',
  FILE_MAX_SIZE_ERROR: 'The file size exceeds the allowed limit.',
  UNSUPPORTED_USER_ROLE: 'The user role is not supported.',
  NOT_FOUND: 'The requested resource was not found.',
  NOT_ALLOWED: 'You do not have permission to perform this action.',
  INTERNAL_SERVER_ERROR:
    'An unexpected error occurred. Please try again later.',
  EMAIL_ALREADY_EXISTS: 'Email already exists',
  INVALID_EMAIL_OR_PASSWORD: 'Invalid email or password',
  NO_PASSWORD: 'No password',
  APARTMENT_NOT_FOUND: 'Apartment not found',
};
