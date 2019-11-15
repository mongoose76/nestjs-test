import { MigrationInterface, QueryRunner } from "typeorm";
import { AnimalTypeSeed } from "../seed/animalTypes.seed";
import { AnimalSeed } from "../seed/animals.seed";

export class SeedData1573134062441 implements MigrationInterface {
    name = 'SeedData1573134062441'

    public async up(queryRunner: QueryRunner): Promise<any> {
        const animalTypes: any = AnimalTypeSeed;
        await queryRunner.manager.getRepository("animal_type").save(animalTypes);

        const animals: any = AnimalSeed;
        await queryRunner.manager.getRepository("animal").save(animals);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.manager.getRepository("animal").clear();
        await queryRunner.manager.getRepository("animal_type").clear();        
    }

}