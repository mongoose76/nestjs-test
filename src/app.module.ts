import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalsModule } from './animals/animals.module';
import { AnimalType } from './animalTypes/animalTypes.entity';
import { Animal } from './animals/animals.entity';
import { AnimalTypesModule } from './animalTypes/animalTypes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nestjs-test',
      entities: [Animal, AnimalType],
      synchronize: true
    }),
    AnimalsModule,
    AnimalTypesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}