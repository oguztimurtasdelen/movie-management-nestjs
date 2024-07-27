import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ShowsService } from 'src/modules/shows/shows.service';
import { CreateShowDto } from 'src/modules/shows/dtos/create-show.dto';
import { UpdateShowDto } from 'src/modules/shows/dtos/update-show.dto';
import { Roles } from 'src/modules/auth/roles.decorator';
import { Role } from 'src/modules/auth/role.enum';
import { RolesGuard } from 'src/modules/auth/roles.guard';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';

@Controller('shows')
export class ShowsController {
    constructor(
        private showsService: ShowsService
    ) {}

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Manager)
    create(@Body() createShowDto: CreateShowDto) {
        return this.showsService.create(createShowDto);
    }

    @Get()
    findAll() {
        return this.showsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.showsService.findOne(+id);
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Manager)
    update(@Param('id') id: string, @Body() updateShowDto: UpdateShowDto) {
        return this.showsService.update(+id, updateShowDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Manager)
    remove(@Param('id') id: string) {
        return this.showsService.remove(+id);
    }
}
