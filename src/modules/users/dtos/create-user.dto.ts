import { IsNotEmpty, IsString, IsInt, Min, Max, IsEmail, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty({message: 'Username cannot be empty!'})
    @IsString()
    @IsEmail()
    username: string;

    @IsNotEmpty({message: 'Password cannot be empty!'})
    @IsString()
    @IsStrongPassword({minLength: 4, minUppercase: 0, minNumbers: 1, minSymbols: 0}, {message: 'Password not strong enough!'})
    password: string;

    @IsInt()
    age: number;

    @IsNotEmpty()
    @IsString()
    role: string;
}
