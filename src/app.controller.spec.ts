/*
 * @Author: hidari
 * @Date: 2025-05-08 11:01:22
 * @LastEditors: hidari
 * @LastEditTime: 2025-05-08 14:01:06
 * Copyright (c) 2025 by hidari, All Rights Reserved.
 */
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
