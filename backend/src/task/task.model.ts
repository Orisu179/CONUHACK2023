import { User } from 'src/user/user.model';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  title?: string;

  @Column({ nullable: true })
  desc?: string;

  @OneToOne(() => User)
  user?: User;

  @Column({ default: false })
  isDone?: boolean;
}
