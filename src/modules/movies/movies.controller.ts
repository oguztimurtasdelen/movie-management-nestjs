import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, NotFoundException } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from 'src/modules/movies/dtos/create-movie.dto';
import { UpdateMovieDto } from 'src/modules/movies/dtos/update-movie.dto';
import { Roles } from 'src/modules/auth/customs/roles.decorator';
import { Role } from 'src/modules/auth/customs/role.enum';
import { RolesGuard } from '../auth/guards/roles.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Manager)
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  findAll(@Query('title') title: string, @Query('ageLimit') ageLimit: number) {
    return this.moviesService.findAll(title, ageLimit);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const _movie = await this.moviesService.findOne(id);
    return _movie ? _movie : new NotFoundException('Movie not found!');
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Manager)
  update(@Param('id') id: number, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Manager)
  remove(@Param('id') id: number) {
    return this.moviesService.remove(id);
  }

  @Post('bulkInsert')
  async bulkCreate(@Body() movies: Movie[]): Promise<Movie[]> {
    return this.moviesService.bulkCreate(movies);
  }
}
