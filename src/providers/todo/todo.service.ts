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
        id: 1,
        title: 'test',
        due_on: new Date(),
        is_done: true,
      },
    ];
  }
}
