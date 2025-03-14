import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { DatabaseModule } from './configs/database/database.module';
import { databaseConfig, dataSource } from './configs/database/postgres.config';
import { addTransactionalDataSource } from 'typeorm-transactional';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { HttpExceptionFilter } from './libs/application/exceptions/exception-filter';
import { ResponseInterceptor } from './libs/interceptors/response.interceptor';
import { UploaderModule } from './libs/application/uploader/uploader.module';
import { AuthModule } from './modules/auth/auth.module';
import { SessionModule } from './modules/session/session.module';
import { UserModule } from './modules/user/user.module';
import { ApartmentsModule } from './modules/apartments/apartments.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule.forRootAsync({
      useFactory: () => databaseConfig,
      async dataSourceFactory(options) {
        if (!options) throw new Error('Invalid options passed');
        return addTransactionalDataSource(dataSource as any);
      },
    }),
    UploaderModule,
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'public'),
      serveStaticOptions: {
        setHeaders: (res) => {
          res.set('Cross-Origin-Resource-Policy', 'cross-origin');
        },
      },
    }),
    AuthModule,
    SessionModule,
    UserModule,
    ApartmentsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    },
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    { provide: APP_INTERCEPTOR, useClass: ResponseInterceptor },
  ],
})
export class AppModule {}
