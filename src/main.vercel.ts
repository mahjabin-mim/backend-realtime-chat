import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

let app;

export default async function handler(req, res) {
  if (!app) {
    app = await NestFactory.create(AppModule);
    app.enableCors({
      origin: [
        'http://localhost:3000',
        'https://frontend-realtime-chat.vercel.app',
        /\.vercel\.app$/ 
      ],
      methods: '*',
      credentials: true,
    });
    await app.init();
  }
  const expressApp = app.getHttpAdapter().getInstance();
  return expressApp(req, res);
}
