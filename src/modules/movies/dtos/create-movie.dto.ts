import { IsNotEmpty, IsNumber, Max, Min } from "class-validator";

export class CreateMovieDto {
    @IsNotEmpty({message: 'Title cannot be empty!'})
    title: string;
    
    description: string;

    @IsNumber()
    @IsNotEmpty()
    ageLimit: number;

}