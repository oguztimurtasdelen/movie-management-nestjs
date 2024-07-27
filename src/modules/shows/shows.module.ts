import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShowsService } from 'src/modules/shows/shows.service';
import { ShowsController } from 'src/modules/shows/shows.controller';
import { Show } from 'src/modules/shows/entities/show.entity';
import { Movie } from 'src/modules/movies/entities/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Show, Movie])],
  controllers: [ShowsController],
  providers: [ShowsService],
  exports: [ShowsService],
})
export class ShowsModule {}
