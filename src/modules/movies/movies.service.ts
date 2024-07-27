import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from 'src/modules/movies/entities/movie.entity';
import { CreateMovieDto } from 'src/modules/movies/dtos/create-movie.dto';
import { UpdateMovieDto } from 'src/modules/movies/dtos/update-movie.dto';

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(Movie)
        private moviesRepository: Repository<Movie>
    ) {}

    create(createMovieDto: CreateMovieDto): Promise<Movie> {
        const movie = this.moviesRepository.create(createMovieDto);
        return this.moviesRepository.save(movie);
    }

    findAll(): Promise<Movie[]> {
        return this.moviesRepository.find({ relations: ['shows'] });
    }

    findOne(id: number): Promise<Movie> {
        return this.moviesRepository.findOne({ where: { id }, relations: ['shows'] });
    }

    async update(id: number, updateMovieDto: UpdateMovieDto): Promise<Movie> {
        await this.moviesRepository.update(id, updateMovieDto);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.moviesRepository.delete(id);
    }
}
