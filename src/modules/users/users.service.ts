import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import * as bcrypt from 'bcrypt';
import { Ticket } from '../tickets/entities/ticket.entity';
import { Show } from '../shows/entities/show.entity';
import { Movie } from '../movies/entities/movie.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,
    @InjectRepository(Show)
    private showRepository: Repository<Show>,
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    if (createUserDto.password) {
        // Genereate a salt
        const passwordSalt = await bcrypt.genSalt();
        // Hash the password with the salt
        createUserDto.password = await bcrypt.hash(createUserDto.password, passwordSalt)
    }
    const user = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async findOneByUsername(username: string): Promise<User> {
    return await this.usersRepository.findOne({ where: { username } });
  }  

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async watchMovie(userId: number, movieId: number) {
    const shows = await this.showRepository
      .createQueryBuilder('show')
      .where('show.movieId = :movieId', { movieId })
      .getMany();
    const showIds = shows.map(show => show.id);

    const ticket = await this.ticketRepository.findOne({
      where: { userId, showId: In(showIds), isWatched: false },
    });

    if (!ticket) {
      throw new NotFoundException('Ticket not found or movie already watched');
    }

    ticket.isWatched = true;
    await this.ticketRepository.save(ticket);

    return true;
  }

  async getWatchHistory(userId: number) {
    const tickets = await this.ticketRepository.findBy({ userId, isWatched: true });
    const showIds = tickets.map(ticket => ticket.showId);

    const shows = await this.showRepository.find({
      where: { id: In(showIds) },
      relations: ['movie'],
    });

    const movies = shows.map(show => show.movie);

    return movies;
  }
}
