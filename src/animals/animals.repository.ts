import { EntityRepository, Repository } from 'typeorm';
import { Animal } from './animals.entity';
import { AnimalTypeRepository } from '../animalTypes/animalTypes.repository';
import { AnimalDto } from './interfaces/animal.dto';
import { InjectRepository } from '@nestjs/typeorm';

@EntityRepository(Animal)
export class AnimalRepository extends Repository<Animal> {

  createAnimal = async (animalDto: AnimalDto) => {
    return await this.save(animalDto);
  };

  findOneAnimal = async (id: number) => {
    return this.findOneOrFail(id);
  };

  updateAnimal = async (id: number, animalDto: AnimalDto) => {
    return this.save({ ...animalDto, id: Number(id) });
  };

  removeAnimal = async (id: number) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  };
}