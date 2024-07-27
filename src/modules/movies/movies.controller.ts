import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from 'src/modules/movies/dtos/create-movie.dto';
import { UpdateMovieDto } from 'src/modules/movies/dtos/update-movie.dto';
import { Roles } from 'src/modules/auth/roles.decorator';
import { Role } from 'src/modules/auth/role.enum';
import { RolesGuard } from '../auth/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

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
  findAll() {
    return this.moviesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Manager)
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(+id, updateMovieDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Manager)
  remove(@Param('id') id: string) {
    return this.moviesService.remove(+id);
  }
}
