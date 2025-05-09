/*
 * @Author: hidari
 * @Date: 2025-05-08 11:01:22
 * @LastEditors: hidari
 * @LastEditTime: 2025-05-08 14:00:21
 * Copyright (c) 2025 by hidari, All Rights Reserved.
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
