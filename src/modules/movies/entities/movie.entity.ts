import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Show } from 'src/modules/shows/entities/show.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  ageLimit: number;

  @OneToMany(() => Show, (show) => show.movie)
  shows: Show[];
}
