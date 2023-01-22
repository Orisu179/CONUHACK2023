import { UserDto } from 'src/user/dto/user.dto';

export interface CreateTaskInput {
  title: string;
  desc: string;
  user: UserDto;
}
