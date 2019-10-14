import { InjectRepository } from '@nestjs/typeorm';
import { DogRepository } from './dogs.repository';
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DogDto } from './interfaces/dog.dto';

@Controller('dogs')
export class DogsController {
    constructor(
        @InjectRepository(DogRepository) private readonly dogRepository: DogRepository
    ) {}

    @Get()
    getDogs() {
        return 'we get all dogs';
    }

    @Post()
    create(@Body() dogDto: DogDto) {
        return this.dogRepository.createDog(dogDto)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `we get the dog with the id ${id}`;
    }

    @Put(':id')
    update(@Param('id') id: string) {
        return `we update the dog with the id ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `we delete the dog with the id ${id}`;
    }
}