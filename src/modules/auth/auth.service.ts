import { Injectable } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/modules/users/users.service";
import { CreateUserDto } from "src/modules/users/dtos/create-user.dto";
import { User } from "src/modules/users/entities/user.entity";


@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOneByUsername(username);
        if (user && user.password === password) {
            const {password, ...result} = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id, role: user.role };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    
    async register(createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.createUser(createUserDto);
    }
}
