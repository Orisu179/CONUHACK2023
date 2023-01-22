import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
