import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Movie } from 'src/modules/movies/entities/movie.entity';
import { Ticket } from "src/modules/tickets/entities/ticket.entity";

@Entity()
export class Show {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  time: string;

  @Column()
  hallNumber: number;

  @ManyToOne(() => Movie, (movie) => movie.shows)
  movie: Movie;

  @OneToMany(() => Ticket, (ticket) => ticket.show)
  tickets: Ticket[];
}
