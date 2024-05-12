import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  name: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_USER_PASSWORD,
}));
