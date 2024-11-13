import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StarshipGetAll } from '../application/StarshipGetAll';
import { TypeOrmStarshipEntity } from './TypeORM/TypeOrmStarshipEntity';
import { TypeOrmStarshipRepository } from './TypeORM/TypeOrmStarshipRepository';
import { StarshipController } from './starship.controller';
import { StarshipBulk } from '../application/StarshipBulk';
import { StarshipCreate } from '../application/StarshipCreate';
import { SwapiRepository } from './Swapi/Swapi.repository';
import { SwapiModule } from '../../../commons/swapi/Swapi.module';

@Module({
  imports: [SwapiModule, TypeOrmModule.forFeature([TypeOrmStarshipEntity])],
  controllers: [StarshipController],
  providers: [
    SwapiRepository,
    {
      provide: 'StarshipRepository',
      useClass: TypeOrmStarshipRepository,
    },
    {
      provide: 'StarshipGetAll',
      useFactory: (repository: TypeOrmStarshipRepository) =>
        new StarshipGetAll(repository),
      inject: ['StarshipRepository'],
    },
    {
      provide: 'StarshipBulk',
      useFactory: (repository: TypeOrmStarshipRepository) =>
        new StarshipBulk(repository),
      inject: ['StarshipRepository'],
    },
    {
      provide: 'StarshipCreate',
      useFactory: (repository: TypeOrmStarshipRepository) =>
        new StarshipCreate(repository),
      inject: ['StarshipRepository'],
    },
  ],
})
export class StarshipModule {}
