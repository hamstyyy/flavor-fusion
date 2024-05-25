import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppConfigService } from '@app-config/app-config.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
    cors: {
      origin: '*',
    },
  });

  app.setGlobalPrefix('rest/api');
  app.useBodyParser('json', { limit: '10mb' });
  app.enableCors({ origin: '*' });
  const configService: AppConfigService = app.get(AppConfigService);
  const port = configService.port;

  await app.listen(port, () => {
    console.log('Application started on port:', port);
  });
}

bootstrap();
