import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './models/task.model';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
  ) {}

  async getTask(id: number): Promise<Task> {
    const task = await this.tasksRepository.findOneBy({ id: id });
    if (!task) {
      throw new NotFoundException(id);
    }
    return task;
  }

  async getTasks(): Promise<Task[]> {
    const tasks = await this.tasksRepository.find();
    return tasks;
  }

  async createTask(createTaskInput: CreateTaskInput): Promise<Task> {
    const task = new Task();
    task.title = createTaskInput.title;
    task.desc = createTaskInput.desc;
    task.isDone = false;
    return await this.tasksRepository.save(task);
  }

  async updateTask(updateTaskInput: UpdateTaskInput): Promise<Task> {
    const task = await this.tasksRepository.findOneBy({
      id: updateTaskInput.id,
    });
    if (!task) {
      throw new NotFoundException(updateTaskInput.id);
    }
    if (updateTaskInput.title !== undefined) {
      task.title = updateTaskInput.title;
    }
    if (updateTaskInput.desc !== undefined) {
      task.desc = updateTaskInput.desc;
    }
    if (updateTaskInput.isDone !== undefined) {
      task.isDone = updateTaskInput.isDone;
    }
    return await this.tasksRepository.save(task);
  }

  async deleteTask(id: number): Promise<boolean> {
    const task = await this.tasksRepository.findOneBy({
      id: id,
    });
    if (!task) {
      throw new NotFoundException(id);
    }
    await this.tasksRepository.delete(task);
    return true;
  }
}
