import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modules
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { MoviesModule } from './modules/movies/movies.module';
import { TicketsModule } from './modules/tickets/tickets.module';
import { ShowsModule } from './modules/shows/shows.module';

// Entities
import { User } from './modules/users/entities/user.entity';
import { Movie } from './modules/movies/entities/movie.entity';
import { Show } from './modules/shows/entities/show.entity';
import { Ticket } from './modules/tickets/entities/ticket.entity';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [User, Movie, Show, Ticket],
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    AuthModule, 
    UsersModule, 
    MoviesModule, 
    TicketsModule,
    ShowsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
