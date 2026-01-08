import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  Patch,
  Body,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';


@Controller('/tasks')
export class TasksController {
  taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  @Get()
  getAllTasks() {
    return this.taskService.getTasks();
  }
  
  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    return this.taskService.getTaskById(parseInt(id));
  }


  @Post()
  createTask(@Body() task: CreateTaskDto) {
    return this.taskService.createTask(task);
  }

  @Put('/:id')
  updateTask(@Param('id') id: string, task: UpdateTaskDto) {
    return this.taskService.updateTask(id, task);
}

  @Delete('/:id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }

  @Patch('/:id/complete')
  markTaskAsComplete(@Param('id') id: string) {
    return this.taskService.patchTask(id);
  }
}
