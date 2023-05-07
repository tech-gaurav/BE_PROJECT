import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'dotenv';
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle(`Blockchain Based Verifiable Credentials`)
    .setDescription(`Project API's`)
    .setVersion('1.0')
    //.addBearerAuth()
    .addServer(`http://localhost:3002`)
    .build();

  const document = SwaggerModule.createDocument(app,options)
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT);
  Logger.log(`:::: Your project listening on port ${process.env.PORT} ::::`)
}
bootstrap();
