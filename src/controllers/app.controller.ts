import { Controller, Get } from '@nestjs/common';
import { AppService } from '../providers/app.service';

/**
 * ルーティング
 * クライアントからリクエスト対してレスポンスを返す
 * 細かな処理は行わない
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMain(): string {
    return this.appService.getMain();
  }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('goodBye')
  getGoodBye(): string {
    return this.appService.getGoodBye();
  }
}
