import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalsModule } from './animals/animals.module';
import { AnimalType } from './animalTypes/animalTypes.entity';
import { Animal } from './animals/animals.entity';
import { AnimalTypesModule } from './animalTypes/animalTypes.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'public'),
    }),
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
  ]
})
export class AppModule {}