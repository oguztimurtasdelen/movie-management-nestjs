import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Show } from './entities/show.entity';
import { CreateShowDto } from 'src/modules/shows/dtos/create-show.dto';
import { UpdateShowDto } from 'src/modules/shows/dtos/update-show.dto';

@Injectable()
export class ShowsService {
  constructor(
    @InjectRepository(Show)
    private showsRepository: Repository<Show>,
  ) {}

  create(createShowDto: CreateShowDto): Promise<Show> {
    const show = this.showsRepository.create(createShowDto);
    return this.showsRepository.save(show);
  }

  findAll(): Promise<Show[]> {
    return this.showsRepository.find({ relations: ['movie'] });
  }

  findOne(id: number): Promise<Show> {
    return this.showsRepository.findOne({ where: { id }, relations: ['movie'] });
  }

  async update(id: number, updateShowDto: UpdateShowDto): Promise<Show> {
    await this.showsRepository.update(id, updateShowDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.showsRepository.delete(id);
  }
}
