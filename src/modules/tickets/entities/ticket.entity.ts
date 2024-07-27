import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/modules/users/entities/user.entity';
import { Show } from 'src/modules/shows/entities/show.entity';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.tickets)
  user: User;

  @ManyToOne(() => Show, (show) => show.tickets)
  show: Show;
}
