import { Dog } from './dogs.entity';
import { EntityRepository, Repository } from 'typeorm';
import { DogDto } from './interfaces/dog.dto';

@EntityRepository(Dog)
export class DogRepository extends Repository<Dog> {
  createDog = async (dogDto: DogDto) => {
    return await this.save(dogDto);
  };

  findOneDog = async (id: string) => {
    return this.findOneOrFail(id);
  };

  updateDog = async (id: string, dogDto: DogDto) => {
    return this.save({ ...dogDto, id: Number(id) });
  };

  removeDog = async (id: string) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  };
}