import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'conuhack',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TaskModule,
  ],
  controllers: [AppController, TaskController],
  providers: [AppService],
})
export class AppModule {}
