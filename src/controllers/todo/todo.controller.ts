import { Controller, Get } from '@nestjs/common';
import { TodoService } from '@providers/todo/todo.service';
import { todo } from '@util/todo/types';

/**
 * ルーティング
 * クライアントからリクエスト対してレスポンスを返す
 * 細かな処理は行わない
 */
@Controller('todo')
export class TodoController {
  constructor(private readonly appService: TodoService) {}

  @Get()
  getMain(): todo[] {
    return [];
  }

  @Get('List')
  getList(): todo[] {
    return this.appService.getList();
  }
}
