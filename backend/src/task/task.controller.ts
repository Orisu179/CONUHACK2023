import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { ServiceUnavailableException } from '@nestjs/common';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly tasksService: TaskService) {}
  @Get(':id')
  async getTask(@Param('id') id: number): Promise<Task> {
    return await this.tasksService.getTask(id);
  }

  @Get('')
  async getTasks(): Promise<Task[]> {
    return await this.tasksService.getTasks();
  }

  @Post('')
  async createTask(@Body() createTaskInput: CreateTaskInput): Promise<Task> {
    const task = await this.tasksService.createTask(createTaskInput);
    if (!task) {
      throw new ServiceUnavailableException();
    }
    return task;
  }

  @Post(':id')
  async updateTask(
    @Param('id') id: number,
    @Body() updateTaskInput: UpdateTaskInput,
  ): Promise<Task> {
    const task = await this.tasksService.updateTask(updateTaskInput);
    if (!task) {
      throw new ServiceUnavailableException();
    }
    return task;
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number): Promise<boolean> {
    return await this.tasksService.deleteTask(id);
  }
}
