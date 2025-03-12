import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { json } from 'express';
import helmet from 'helmet';
import * as compression from 'compression';
import rateLimit from 'express-rate-limit';
import { initializeTransactionalContext } from 'typeorm-transactional';
import { get } from 'env-var';

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

async function bootstrap(): Promise<void> {
  initializeTransactionalContext();

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: { origin: '*' },
  });

  app.setGlobalPrefix('api/v1');
  setupMiddlewares(app);
  if (get('NODE_ENV').asString() === 'production') setupRateLimiter(app);

  await app.listen(get('PORT').required().asString());
}
bootstrap();
