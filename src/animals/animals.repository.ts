import { EntityRepository, Repository } from 'typeorm';
import { Animal } from './animals.entity';
import { AnimalDto } from './interfaces/animal.dto';

@EntityRepository(Animal)
export class AnimalRepository extends Repository<Animal> {
  createAnimal = async (animalDto: AnimalDto) => {
    return await this.save(animalDto);
  };

  findOneAnimal = async (id: number) => {
    return this.findOneOrFail(id, { relations: ['type'] });
  };

  updateAnimal = async (id: number, animalDto: AnimalDto) => {
    return this.save({ ...animalDto, id: Number(id) });
  };

  removeAnimal = async (id: number) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  };
}
