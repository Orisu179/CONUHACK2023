import { UserDto } from 'src/user/dto/user.dto';

export interface UpdateTaskInput {
  id: number;
  title?: string;
  desc?: string;
  user?: UserDto;
  isDone?: boolean;
}
