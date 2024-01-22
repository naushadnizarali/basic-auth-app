/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { DbConnectService } from '@backend/utility/database';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  const port = process.env.PORT || 3000;
  const databaseService = app.get(DbConnectService);

  await databaseService.initializeDatabaseServices();

  app.setGlobalPrefix(globalPrefix);
  app.enableCors({ origin: true });
  app.useGlobalPipes(new ValidationPipe());

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Hire Safe APIs')
    .setDescription('Set of APIs to support Hire Safe Application')
    .setVersion('1.0')
    // .addBearerAuth()
    .build();

  const docs = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup(`${globalPrefix}/docs`, app, docs);

  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );

  Logger.log(
    `🚀 Swagger Docs is running on: http://localhost:${port}/${globalPrefix}/docs`
  );
}

bootstrap();
