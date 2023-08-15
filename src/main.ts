import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.enableCors();
  app.setGlobalPrefix('api');
  const port = process.env.PORT;
  // console.log(process.env);
  // const configService = app.get(ConfigService); //This is also working
  // const port = configService.get('PORT'); //This is also working
  console.log(port);
  const options = new DocumentBuilder()
    .setTitle('Users API')
    .setDescription('This Api is Used for CRUD operation of Users')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(port);
}
bootstrap();
