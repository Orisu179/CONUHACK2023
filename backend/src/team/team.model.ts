import { Task } from 'src/task/task.model';
import { User } from 'src/user/user.model';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  teamName: string;

  @Column()
  teamRating: number;

  @OneToMany(() => User, (user) => user.team)
  hires: User[];

  @OneToMany(() => Task, (task) => task.team)
  tasks: Task[];
}
