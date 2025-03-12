import { IErrorMessage } from '../error-messages-interface';

export const arErrorMessage: IErrorMessage = {
  UNAUTHORIZED: 'غير مصرح',
  BLOCKED_USER: 'المستخدم محظور',
  MAX_FILE_COUNT_EXCEEDED: 'تم تجاوز الحد الأقصى للملفات',
  FILE_NEEDED_ERROR: 'الملف المطلوب غير موجود',
  FILE_EXTENSION_ERROR: 'امتداد الملف غير مدعوم',
  FILE_MAX_SIZE_ERROR: 'تم تجاوز الحد الأقصى لحجم الملف',
  UNSUPPORTED_USER_ROLE: 'دور المستخدم غير مدعوم',
  NOT_FOUND: 'غير موجود',
  NOT_ALLOWED: 'غير مسموح',
  INTERNAL_SERVER_ERROR: 'حدث خطأ في الخادم',
  EMAIL_ALREADY_EXISTS: 'البريد الإلكتروني موجود بالفعل',
  INVALID_EMAIL_OR_PASSWORD: 'البريد الإلكتروني أو كلمة المرور غير صحيحة',
  NO_PASSWORD: 'لا توجد كلمة مرور',
};
