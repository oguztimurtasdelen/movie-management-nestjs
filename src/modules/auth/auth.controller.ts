import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthService } from "src/modules/auth/auth.service";
import { LocalAuthGuard } from "src/modules/auth/guards/local-auth.guard";
import { JwtAuthGuard } from "src/modules/auth/guards/jwt-auth.guard";
import { CreateUserDto } from "src/modules/users/dtos/create-user.dto";
import { LoginUserDto } from 'src/modules/auth/dtos/login-user.dto';
import { User } from '../users/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto) {
        return this.authService.login(loginUserDto);
    }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        return this.authService.register(createUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Post('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @Post('bulkInsert')
    async bulkCreate(@Body() users: User[]): Promise<User[]> {
        const hashedUsers = await Promise.all(
            users.map(async (user) => {
              const hashedPassword = await bcrypt.hash(user.password, 10);
              return this.authService.register({ ...user, password: hashedPassword });
            }),
          );
        return hashedUsers;
    }
}
