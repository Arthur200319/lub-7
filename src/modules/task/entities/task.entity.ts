import { User } from 'src/modules/users/entities/user.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({default: false})
  complited: boolean;

  @ManyToOne(() => User,user => user.task)
  author: User;

  @CreateDateColumn()
  created_at: Date;
}
