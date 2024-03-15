import { Module } from '@nestjs/common';
import { AppController } from '@controllers/app.controller';
import { TodoController } from '@controllers/todo/todo.controller';
import { AppService } from '@providers//app.service';
import { TodoService } from '@providers/todo/todo.service';

@Module({
  imports: [],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
