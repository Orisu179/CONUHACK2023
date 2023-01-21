import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role, User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  private readonly users: User[] = [
    {
      id: 1,
      email: 'email1',
      password: 'passwd1',
      name: 'jyu1',
      role: Role.HR,
      team: {
        id: 1,
        teamName: 'lmao',
        teamRating: 4,
        hires: [],
      },
    },
  ];

  async getUser(email: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({ email: email });
  }
}
