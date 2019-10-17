import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalsModule } from './animals/animals.module';
import { DogsModule } from './dogs/dogs.module';
import { Dog } from './dogs/dogs.entity';
import { AnimalType } from './animals/animalTypes.entity';
import { Animal } from './animals/animals.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nestjs-test',
      entities: [Animal, AnimalType, Dog],
      synchronize: true
    }),
    AnimalsModule,
    DogsModule    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}