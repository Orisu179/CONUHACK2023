import { Task } from 'src/task/task.model';
import { Team } from 'src/team/team.model';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum Role {
  NewHire,
  Manager,
  HR,
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  role: Role;

  @ManyToOne(() => Team, (team) => team.hires)
  team: Team[];

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];
}
