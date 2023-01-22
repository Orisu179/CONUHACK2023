import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateTeamInput } from './dto/createteam.input';
import { UpdateTeamInput } from './dto/updateteam.input';
import { Team } from './team.model';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private teamsRepository: Repository<Team>,
    private userService: UserService,
  ) {}

  create(createTeamDto: CreateTeamInput) {
    const team = new Team();
    team.teamName = createTeamDto.teamName;
    return this.teamsRepository.create(team);
  }

  async findOneById(id: number) {
    return this.teamsRepository.findOneBy({ id: id });
  }

  async findOneByTeamName(teamName: string) {
    return this.teamsRepository.findOneBy({ teamName: teamName });
  }

  async update(updateTeamInput: UpdateTeamInput) {
    const team = await this.findOneById(updateTeamInput.id);

    team.teamName = updateTeamInput.teamName || team.teamName;
    team.teamRating = updateTeamInput.teamRating || team.teamRating;

    const hires = [];
    for (const hire of updateTeamInput.hires) {
      hires.push(await this.userService.findOneById(hire.id));
    }
    team.hires = updateTeamInput.hires || hires;

    return this.teamsRepository.save(team);
  }
}
