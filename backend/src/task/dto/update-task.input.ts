import { CreateTaskInput } from './create-task.input';

export class UpdateTaskInput extends CreateTaskInput {
  id: number;
  isDone?: boolean;
}
