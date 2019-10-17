import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { AnimalType } from './animalTypes.entity';

@Entity()
export class Animal {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({length: 50, unique: true})
   name: string;

   @ManyToOne(type => AnimalType)
   type: AnimalType;

   @Column()
   age: number;

   @Column({length: 100, nullable: true})
   breed: string;
}