import { Module } from '@nestjs/common';
import { AppController } from '@controllers/app.controller';
import { TodoController } from '@controllers/todo/app.controller';
import { AppService } from '@providers//app.service';
import { TodoService } from '@providers/todo/todo.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService, PrismaService],
})
export class AppModule {}
