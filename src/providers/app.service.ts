import { Injectable } from '@nestjs/common';

/**
 * 処理・ロジックを作成する
 */
@Injectable()
export class AppService {
  getMain(): string {
    return 'Start Serer';
  }

  getHello(): string {
    return 'Hello World!';
  }

  getGoodBye(): string {
    return 'Good Bye!';
  }
}
