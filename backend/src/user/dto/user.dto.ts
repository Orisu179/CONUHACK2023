import { Role } from '../user.model';

export interface UserDto {
  id: number;
  email: string;
  name: string;
  role: Role;
  team: any;
  tasks: any;
}
