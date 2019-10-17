import { EntityRepository, Repository } from 'typeorm';
import { AnimalType } from './animalTypes.entity';
import { AnimalTypeDto } from './interfaces/animalType.dto';

@EntityRepository(AnimalType)
export class AnimalTypeRepository extends Repository<AnimalType> {
  createType = async (animalTypeDto: AnimalTypeDto) => {
    return await this.save(animalTypeDto);
  };

  findOneType = async (id: string) => {
    return this.findOneOrFail(id);
  };

  updateType = async (id: string, animalTypeDto: AnimalTypeDto) => {
    return this.save({ ...animalTypeDto, id: Number(id) });
  };

  removeType = async (id: string) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  };
}