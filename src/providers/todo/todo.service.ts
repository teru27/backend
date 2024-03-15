import { Injectable } from '@nestjs/common';
import { todo } from '@util/todo/types';

/**
 * 処理・ロジックを作成する
 */
@Injectable()
export class TodoService {
  getList(): todo[] {
    return [
      {
        title: '牛乳を買いに行く',
        due_on: '2022-12-24',
        done: false,
      },
    ];
  }
}
