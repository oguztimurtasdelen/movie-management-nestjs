import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty({message: 'Username cannot be empty!'})
  @IsString()
  username: string;

  @IsNotEmpty({message: 'Password cannot be empty!'})
  @IsString()
  password: string;
}
