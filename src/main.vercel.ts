import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

let app;

export default async function handler(req, res) {
  if (!app) {
    app = await NestFactory.create(AppModule);
    app.enableCors({
      origin: '*', // Allow all origins for now, or specify your frontend URL
      methods: '*',
      credentials: true,
    });
    await app.init();
  }
  const expressApp = app.getHttpAdapter().getInstance();
  return expressApp(req, res);
}
