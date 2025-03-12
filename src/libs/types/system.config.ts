import { UserRoleEnum } from '@modules/user/enums/user.enum';
import { LangEnum } from '../enums/language-code.enum';

export type authStrategiesType = 'phone' | 'email' | 'email-phone';
export type UploaderDefaultConfigType = { storagePath: string };

export declare class ProjectConfigType {
  environment: typeof process.env.NODE_ENV;
  defaultLanguage: LangEnum;
  authentication: {
    JWT_SECRET: string;
    accountVerified: boolean;
    authStrategy: authStrategiesType;
    authRole: Partial<{ [key in UserRoleEnum]: authStrategiesType }>;
  };
  name: string;
}

export function createConfig(config: ProjectConfigType): ProjectConfigType {
  // we can handle here configuration for different services strategies as mail , uploader
  return {
    ...config,
  };
}
