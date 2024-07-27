import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from 'src/modules/movies/entities/movie.entity';
import { Show } from 'src/modules/shows/entities/show.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie, Show])
  ],
  providers: [MoviesService],
  controllers: [MoviesController]
})
export class MoviesModule {}
