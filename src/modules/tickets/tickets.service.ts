import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './entities/ticket.entity';
import { CreateTicketDto } from 'src/modules/tickets/dtos/create-ticket.dto';
import { Show } from '../shows/entities/show.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private ticketsRepository: Repository<Ticket>,
    @InjectRepository(Show)
    private showsRepository: Repository<Show>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const show = await this.showsRepository.findOne({ where: { id: createTicketDto.showId } });
    const user = await this.usersRepository.findOne({ where: { id: createTicketDto.userId } });
    const ticket = this.ticketsRepository.create({ ...createTicketDto, show, user });
    return this.ticketsRepository.save(ticket);
  }

  findAll(): Promise<Ticket[]> {
    return this.ticketsRepository.find({ relations: ['show', 'user'] });
  }

  findOne(id: number): Promise<Ticket> {
    return this.ticketsRepository.findOne({ where: { id }, relations: ['show', 'user'] });
  }

  async remove(id: number): Promise<void> {
    await this.ticketsRepository.delete(id);
  }
}
