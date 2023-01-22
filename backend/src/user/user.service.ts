import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/createuser.input';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findOneByEmail(email: string): Promise<User> {
    return this.usersRepository.findOneBy({ email: email });
  }

  findOneById(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id: id });
  }

  create(createUser: CreateUserInput) {
    const user = new User();
    user.email = createUser.email;
    user.password = createUser.password;
    user.role = createUser.role;
    user.name = createUser.name;
  }
}
