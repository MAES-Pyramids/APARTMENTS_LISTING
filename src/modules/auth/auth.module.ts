import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { JwtStrategy } from '@libs/strategies/jwt.strategy';
import { LocalStrategy } from '@libs/strategies/local.strategy';
import { DatabaseModule } from '../../configs/database/database.module';
import { ContextModule } from '../../libs/application/context/context.module';
import { SessionModule } from '../session/session.module';
import { UserModule } from '../user/user.module';
import { User } from '../user/entities/user.entity';
import { HelperModule } from '../../libs/utils/helper/helper.module';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async () => {
        const options: JwtModuleOptions = {
          signOptions: { algorithm: 'RS256' },
          verifyOptions: { algorithms: ['RS256'] },
        };
        return options;
      },
    }),
    DatabaseModule.forFeature([User]),
    ContextModule,
    SessionModule,
    PassportModule,
    UserModule,
    HelperModule,
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
