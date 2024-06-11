import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200',
  }
  )
  const documentOptions = new DocumentBuilder()
    .setTitle('JellyBelly API')
    .setDescription('JellyBelly Bean Flavor API Project')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, documentOptions);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
