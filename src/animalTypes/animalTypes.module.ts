import { Module } from '@nestjs/common';
import { AnimalTypesController } from './animalTypes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalType } from './animalTypes.entity';
import { AnimalTypeRepository } from './animalTypes.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AnimalType, AnimalTypeRepository])],
  controllers: [AnimalTypesController],
})
export class AnimalTypesModule {}