import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { TeamController } from './team.controller';
import { Team } from './team.model';
import { TeamService } from './team.service';

@Module({
  imports: [TypeOrmModule.forFeature([Team]), UserModule],
  providers: [TeamService],
  controllers: [TeamController],
})
export class TeamModule {}
