import { Controller, Get, Post, Body, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { TicketsService } from 'src/modules/tickets/tickets.service';
import { CreateTicketDto } from 'src/modules/tickets/dtos/create-ticket.dto';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@Controller('tickets')
@UseGuards(JwtAuthGuard)
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  create(@Body() createTicketDto: CreateTicketDto, @Req() req) {
    console.log(req.user)
    return this.ticketsService.create(createTicketDto, req.user.userId);
  }

  @Get()
  findAll() {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ticketsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ticketsService.remove(id);
  }
}
