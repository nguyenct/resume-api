import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RedocModule } from 'nestjs-redoc';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  const port = configService.get('port');

  const options = new DocumentBuilder().build();
  const document = SwaggerModule.createDocument(app, options, {
    operationIdFactory: (_controllerKey: string, methodKey: string) =>
      methodKey,
  });

  const redocOptions = {
    title: configService.get('doc').title,
    logo: {
      url: configService.get('doc').profileUrl,
    },
    sortPropsAlphabetically: true,
    hideDownloadButton: true,
    hideHostname: true,
  };
  await RedocModule.setup('/', app, document, redocOptions);

  await app.listen(port);
}
bootstrap();
