import { InjectRepository } from '@nestjs/typeorm';
import { AnimalRepository } from './animals.repository';
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AnimalDto } from './interfaces/animal.dto';

@Controller('animals')
export class AnimalsController {
    constructor(
        @InjectRepository(AnimalRepository) private readonly animalRepository: AnimalRepository
    ) {}

    @Get()
    findAll() {
        return this.animalRepository.find();
    }

    @Post()
    create(@Body() animalDto: AnimalDto) {
        return this.animalRepository.createAnimal(animalDto)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.animalRepository.findOneAnimal(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() animalDto: AnimalDto) {
        return this.animalRepository.updateAnimal(id, animalDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.animalRepository.removeAnimal(id);
    }
}