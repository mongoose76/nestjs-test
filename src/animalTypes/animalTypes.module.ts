import { Module } from '@nestjs/common';
import { AnimalsController as AnimalsTypesController } from './animalTypes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalType } from './animalTypes.entity';
import { AnimalTypeRepository } from './animalTypes.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AnimalType, AnimalTypeRepository])],
  controllers: [AnimalsTypesController],
})
export class AnimalTypesModule {}