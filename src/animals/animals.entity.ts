import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, RelationId } from 'typeorm';
import { AnimalType } from '../animalTypes/animalTypes.entity';

@Entity()
export class Animal {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({length: 50, unique: true})
   name: string;

   @ManyToOne(type => AnimalType)
   type: AnimalType;

   @RelationId((animal: Animal) => animal.type)
   typeId: number;

   @Column()
   age: number;

   @Column({length: 100, nullable: true})
   breed: string;
}