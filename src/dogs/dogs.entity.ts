import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Dog {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({length: 50, unique: true})
   name: string;

   @Column()
   age: number;

   @Column({length: 100, nullable: true})
   breed: string;
}