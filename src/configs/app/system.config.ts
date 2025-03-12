import { env } from 'process';
import { createConfig } from '@libs/types/system.config';
import { LangEnum } from '@libs/enums/language-code.enum';

export const Config = createConfig({
  name: env.BrandName || 'nawy_assignment',
  defaultLanguage: LangEnum.EN,
  authentication: {
    JWT_SECRET: env.JWT_SECRET || 'quf232%@hyHGW$#TGhd',
    accountVerified: false,
    authStrategy: 'email',
    authRole: {},
  },
  environment: process.env.NODE_ENV || 'development',
});
