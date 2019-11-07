import { InjectRepository } from '@nestjs/typeorm';
import { AnimalTypeRepository } from './animalTypes.repository';
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AnimalTypeDto } from './interfaces/animalType.dto';

@Controller('animalTypes')
export class AnimalTypesController {
    constructor(
        @InjectRepository(AnimalTypeRepository) private readonly animalTypeRepository: AnimalTypeRepository
    ) {}

    @Get()
    findAll() {
        return this.animalTypeRepository.find();
    }

    @Post()
    create(@Body() animalTypeDto: AnimalTypeDto) {
        return this.animalTypeRepository.createType(animalTypeDto)
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.animalTypeRepository.findOneType(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() animalTypeDto: AnimalTypeDto) {
        return this.animalTypeRepository.updateType(id, animalTypeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.animalTypeRepository.removeType(id);
    }
}