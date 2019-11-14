import { Module } from '@nestjs/common';
import { AnimalsController } from './animals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './animals.entity';
import { AnimalRepository } from './animals.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Animal, AnimalRepository])],
  controllers: [AnimalsController],
})
export class AnimalsModule {}
