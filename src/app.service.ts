/*
 * @Author: hidari
 * @Date: 2025-05-08 11:01:22
 * @LastEditors: hidari
 * @LastEditTime: 2025-05-08 14:02:40
 * Copyright (c) 2025 by hidari, All Rights Reserved.
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello nest!';
  }
}
