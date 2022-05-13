import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { RequestWithUser } from 'src/common/types/request-with-user.type';
import { AuthGuard } from './../../common/guards/auth.guard';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';

@Controller('task')
@UseGuards(AuthGuard)
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('completed')
  completed(@Req() req: RequestWithUser) {
    return this.taskService.completed(req.user.id);
  }

  @Get('uncompleted')
  uncompleted(@Req() req: RequestWithUser) {
    return this.taskService.uncompleted(req.user.id);
  }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto, @Req() req: RequestWithUser) {
    return this.taskService.create(createTaskDto, req.user);
  }

  @Post('makeCompleted/:id')
  makeCompleted(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.makeCompleted(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.remove(id);
  }
}
