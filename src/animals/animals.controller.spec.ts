import { Test } from '@nestjs/testing';
import { AnimalsController } from './animals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './animals.entity';
import { AnimalDto } from './interfaces/animal.dto';
import { AnimalTypeDto } from 'src/animalTypes/interfaces/animalType.dto';
import { AnimalRepository } from './animals.repository';
import { AnimalTypeRepository } from '../animalTypes/animalTypes.repository';
import { getConnection } from 'typeorm';
import { AnimalType } from '../animalTypes/animalTypes.entity';

describe('AnimalsController', () => {
  let animalsController: AnimalsController;
  let animalTypeRepository: AnimalTypeRepository;
  let animalRepository: AnimalRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(),
        TypeOrmModule.forFeature([
          Animal,
          AnimalTypeRepository,
          AnimalRepository,
        ]),
      ],
      controllers: [AnimalsController],
    }).compile();

    animalsController = module.get<AnimalsController>(AnimalsController);
    animalRepository = module.get<AnimalRepository>(AnimalRepository);
    animalTypeRepository = module.get<AnimalTypeRepository>(
      AnimalTypeRepository,
    );

    await getConnection().synchronize(true);
  }, 20000);

  afterAll(async () => {
    // Closing the DB connection allows Jest to exit successfully.
    await getConnection().close();
  });

  describe('findOne', () => {
    it('should return one animal', async done => {
      const animalTypeDto: AnimalTypeDto = {
        name: 'Dog',
      };

      const newAnimalType = await animalTypeRepository.createType(
        animalTypeDto,
      );
      const newAnimalTypeId = newAnimalType.id;

      const animalDto: AnimalDto = {
        name: 'Kiki',
        age: 1,
        breed: 'labrador',
        typeId: newAnimalTypeId,
      };
      const createdAnimal = await animalsController.create(animalDto);

      const animalType = new AnimalType();
      animalType.id = newAnimalTypeId;
      animalType.name = 'Dog';

      const expectedResult: Animal = new Animal();
      expectedResult.id = createdAnimal.id;
      (expectedResult.name = 'Kiki'), (expectedResult.age = 1);
      expectedResult.breed = 'labrador';
      expectedResult.typeId = newAnimalTypeId;
      expectedResult.type = animalType;

      const findResult = await animalsController.findOne(createdAnimal.id);
      expect(findResult).toStrictEqual(expectedResult);

      done();
    }, 10000);
  });
});
