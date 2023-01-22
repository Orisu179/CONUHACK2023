import { User } from 'src/user/user.model';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  teamName: string;

  @Column({ default: 0.0 })
  teamRating: number;

  @OneToMany(() => User, (user) => user.team)
  hires: User[];
}
