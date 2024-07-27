import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { TicketsService } from 'src/modules/tickets/tickets.service';
import { CreateTicketDto } from 'src/modules/tickets/dtos/create-ticket.dto';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';

@Controller('tickets')
@UseGuards(JwtAuthGuard)
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketsService.create(createTicketDto);
  }

  @Get()
  findAll() {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketsService.remove(+id);
  }
}
