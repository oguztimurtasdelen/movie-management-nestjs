import { IsNotEmpty, IsDateString, IsString } from 'class-validator';

export class CreateShowDto {
  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsNotEmpty()
  @IsString()
  time: string;

  @IsNotEmpty()
  @IsString()
  hall: string;

  @IsNotEmpty()
  @IsString()
  movieId: string;
}
