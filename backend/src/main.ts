import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { json } from 'express';
import helmet from 'helmet';
import * as compression from 'compression';
import rateLimit from 'express-rate-limit';
import { initializeTransactionalContext } from 'typeorm-transactional';
import { get } from 'env-var';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

function setupMiddlewares(app: NestExpressApplication) {
  app.use(json());
  app.use(compression());
  app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
    }),
  );
}

function setupRateLimiter(app: NestExpressApplication) {
  app.use(rateLimit({ windowMs: 60000, max: 100 }));
}

function setupSwagger(app: NestExpressApplication) {
  const config = new DocumentBuilder()
    .setTitle('NAWY APARTMENTS API')
    .setDescription('API documentation for NAWY assignment application')
    .setVersion('1.0')
    .addServer('api/v1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
}

async function bootstrap(): Promise<void> {
  initializeTransactionalContext();

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: { origin: '*' },
  });
  setupSwagger(app);

  app.setGlobalPrefix('api/v1');
  setupMiddlewares(app);
  if (get('NODE_ENV').asString() === 'production') setupRateLimiter(app);

  await app.listen(get('PORT').required().asString());
}
bootstrap();
