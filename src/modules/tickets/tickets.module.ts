import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { Ticket } from 'src/modules/tickets/entities/ticket.entity';
import { Show } from 'src/modules/shows/entities/show.entity';
import { User } from 'src/modules/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket, Show, User])],
  controllers: [TicketsController],
  providers: [TicketsService],
  exports: [TicketsService],
})
export class TicketsModule {}
