import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'chat_db',
  // entities: ['dist/**/*.entity{.ts,.js}'], // Removed for Vercel compatibility
  autoLoadEntities: true,
  synchronize: true,
  ssl: process.env.DB_HOST !== 'localhost',
  extra: {
    ssl:
      process.env.DB_HOST !== 'localhost'
        ? {
            rejectUnauthorized: false,
          }
        : null,
  },
};

export default config;
