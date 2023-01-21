import { User } from 'src/user/user.model';

export class CreateTaskInput {
  title?: string;
  desc?: string;
  user?: User;
}
