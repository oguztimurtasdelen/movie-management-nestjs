import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/modules/users/entities/user.entity';
import { Show } from 'src/modules/shows/entities/show.entity';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  showId: number;

  @ManyToOne(() => User, (user) => user.tickets)
  user: User;

  @ManyToOne(() => Show, (show) => show.tickets)
  @JoinColumn({ name: 'showId' })
  show: Show;

  @Column({ default: false })
  isWatched: boolean;
}
