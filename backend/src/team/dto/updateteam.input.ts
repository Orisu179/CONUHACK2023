import { UserDto } from 'src/user/dto/user.dto';

export interface UpdateTeamInput {
  id: number;
  teamName?: string;
  teamRating?: number;
  hires?: UserDto[];
}
