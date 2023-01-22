import { Role } from '../user.model';

export interface CreateUserInput {
  email: string;
  password: string;
  name: any;
  role: Role;
}
