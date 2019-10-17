import { EntityRepository, Repository } from 'typeorm';
import { Animal } from './animals.entity';
import { AnimalDto } from './interfaces/animal.dto';

@EntityRepository(Animal)
export class AnimalRepository extends Repository<Animal> {
  createAnimal = async (animalDto: AnimalDto) => {
    return await this.save(animalDto);
  };

  findOneAnimal = async (id: string) => {
    return this.findOneOrFail(id);
  };

  updateAnimal = async (id: string, animalDto: AnimalDto) => {
    return this.save({ ...animalDto, id: Number(id) });
  };

  removeAnimal = async (id: string) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  };
}