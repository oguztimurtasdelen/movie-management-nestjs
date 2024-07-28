import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateTicketDto {
  @IsNotEmpty({message: 'Show info cannot be empty!'})
  @IsInt()
  showId: number;


}
