import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTeamInput } from './dto/createteam.input';
import { UpdateTeamInput } from './dto/updateteam.input';
import { TeamService } from './team.service';

@Controller('/team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  async createTeam(@Body() createTeamDto: CreateTeamInput) {
    return this.teamService.create(createTeamDto);
  }

  @Get(':teamname')
  async getTeamByName(@Param('teamName') teamName: string) {
    return this.teamService.findOneByTeamName(teamName);
  }

  @Post()
  async updateTeam(@Body() updateTeamDto: UpdateTeamInput) {
    return this.teamService.update(updateTeamDto);
  }
}
