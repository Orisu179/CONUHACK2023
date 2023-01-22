import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Public } from 'src/auth/constants';
import { CreateUserInput } from './dto/createuser.input';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUser(@Param('id') id: number) {
    const user = await this.userService.findOneById(id);

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      team: user.team,
      tasks: user.tasks,
    } as UserDto;
  }

  @Public()
  @Post()
  async createUser(@Body() user: CreateUserInput) {
    return this.userService.create(user);
  }
}
