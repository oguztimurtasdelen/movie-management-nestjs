import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.usersService.remove(id);
  }

  @Post(':userId/watch-movie/:movieId')
  async watchMovie(
    @Param('userId') userId: number,
    @Param('movieId') movieId: number,
  ) {
    return this.usersService.watchMovie(Number(userId), Number(movieId));
  }

  @Get(':userId/watch-history')
  async getWatchHistory(@Param('userId') userId: number) {
    return this.usersService.getWatchHistory(Number(userId));
  }
}
