import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
import { Task } from './task/task.model';
import { User } from './user/user.model';
import { UserModule } from './user/user.module';
import { TeamModule } from './team/team.module';
import { Team } from './team/team.model';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'username',
      password: 'password',
      database: 'default_database',
      entities: [Task, User, Team],
      synchronize: true,
    }),
    TaskModule,
    UserModule,
    TeamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
