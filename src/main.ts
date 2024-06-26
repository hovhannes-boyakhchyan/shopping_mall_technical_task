import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });
  const configs: ConfigService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('/api');
  const logger = new Logger('SHOPPING MALL DELIVERY');
  const port = configs.get<number>('PORT');
  const NODE_ENV = configs.get<number>('NODE_ENV');

  await app.listen(port, () => {
    logger.log(`Service is running on ==>> http://...:${port}`);
    logger.log(`ENVIRONMENT ==>> ${NODE_ENV}`);
  });
}
bootstrap();
