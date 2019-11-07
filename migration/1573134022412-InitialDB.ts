import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialDB1573134022412 implements MigrationInterface {
    name = 'InitialDB1573134022412'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "animal_type" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, CONSTRAINT "UQ_f6a939d4ee673b5fcaaf4b3d2e8" UNIQUE ("name"), CONSTRAINT "PK_1facc9ac796d1cb8c2de0d2a556" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "animal" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "typeId" integer, "age" integer NOT NULL, "breed" character varying(100), CONSTRAINT "UQ_31a3be0a6dc5997e2aafbafe4d6" UNIQUE ("name"), CONSTRAINT "PK_af42b1374c042fb3fa2251f9f42" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "animal" ADD CONSTRAINT "FK_b5768cfe0c420eb755866248064" FOREIGN KEY ("typeId") REFERENCES "animal_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "animal" DROP CONSTRAINT "FK_b5768cfe0c420eb755866248064"`, undefined);
        await queryRunner.query(`DROP TABLE "animal"`, undefined);
        await queryRunner.query(`DROP TABLE "animal_type"`, undefined);
    }

}
