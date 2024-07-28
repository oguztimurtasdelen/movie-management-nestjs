import { IsNotEmpty, IsDateString, IsString, IsNumber } from 'class-validator';

export class CreateShowDto {
  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsNotEmpty()
  @IsString()
  time: string;

  @IsNotEmpty()
  @IsNumber()
  hallNumber: number;

  @IsNotEmpty()
  @IsNumber()
  movieId: number;
}
