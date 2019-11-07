import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDogs1571053829539 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "dog" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "age" integer NOT NULL, "breed" character varying(100), CONSTRAINT "PK_187826f37fd8e592a5711350db1" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "dog"`, undefined);
    }

}
