import { Team } from 'src/team/team.model';
import { User } from 'src/user/user.model';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  desc: string;

  @ManyToOne(() => Team, (team) => team.tasks)
  team: Team;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;

  @Column({ default: false })
  isDone: boolean;
}
