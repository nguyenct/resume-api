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
  const githubUrl = configService.get('githubUrl');
  const rootUri = configService.get('rootUri');
  const port = configService.get('port');

  const options = new DocumentBuilder()
    .setDescription(
      `README.md & Source Code @ ${githubUrl} <p> TL;DR - Go to:<br>
      https://${rootUri}/resume/render?access_token=</p>`,
    )
    .build();
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
