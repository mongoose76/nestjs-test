import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, RelationId } from 'typeorm';
import { AnimalType } from '../animalTypes/animalTypes.entity';

@Entity()
export class Animal {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({length: 50, unique: true})
   name: string;
   
   @Column({nullable: true})
   typeId: number;

   @ManyToOne(type => AnimalType)
   type: AnimalType;

   @Column()
   age: number;

   @Column({length: 100, nullable: true})
   breed: string;
}