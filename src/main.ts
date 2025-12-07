import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://frontend-realtime-chat.vercel.app', // Update this with your actual Vercel domain after deployment
      /\.vercel\.app$/ // Allow all vercel.app subdomains for preview deployments
    ],
    methods: '*',
    credentials: true,
  });
  await app.listen(process.env.PORT || 8000);
}
bootstrap();
