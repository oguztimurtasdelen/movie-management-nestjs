import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateTicketDto {
  @IsNotEmpty()
  @IsInt()
  showId: number;

  @IsNotEmpty()
  @IsInt()
  userId: number;
}
