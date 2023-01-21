import { Team } from 'src/team/team.model';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne((type) => Team, (team) => team.hires)
  team: Team;
}
