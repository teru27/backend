import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from '@util/todo/crad/create-task.dto';
import { UpdateTaskDto } from '@util/todo/crad/update-task.dto';
import { todo } from '@util/todo/types';
import { PrismaService } from 'src/prisma/prisma.service';

/**
 * ルーティング
 * クライアントからリクエスト対してレスポンスを返す
 * 細かな処理は行わない
 */
@Controller('todo')
export class TodoController {
  constructor(private prisma: PrismaService) {}

  @Get()
  getMain(): todo[] {
    return [];
  }

  @Get('List')
  async getList(): Promise<todo[]> {
    const result = await this.prisma.task.findMany();
    return [...result];
  }

  @Post('')
  async add(@Body() task: CreateTaskDto) {
    const result = await this.prisma.task.create({
      data: task,
    });
    return {
      status: 'OK',
    };
  }

  @Post(':id/done')
  async done(@Param() param: UpdateTaskDto) {
    await this.prisma.task.updateMany({
      data: {
        is_done: true,
      },
      where: {
        id: Number(param.id),
      },
    });
    return {
      status: 'OK',
    };
  }

  @Post(':id/active')
  async active(@Param() param: UpdateTaskDto) {
    await this.prisma.task.updateMany({
      data: {
        is_done: false,
      },
      where: {
        id: Number(param.id),
      },
    });
    return {
      status: 'OK',
    };
  }
}
