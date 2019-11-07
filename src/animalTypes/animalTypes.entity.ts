import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class AnimalType {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({length: 50, unique: true})
   name: string;
}