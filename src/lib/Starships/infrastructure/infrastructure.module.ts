import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StarshipGetAll } from '../application/StarshipGetAll';
import { TypeOrmStarshipEntity } from './TypeORM/TypeOrmStarshipEntity';
import { TypeOrmStarshipRepository } from './TypeORM/TypeOrmStarshipRepository';
import { StarshipController } from './infrastructure.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TypeOrmStarshipEntity])],
  controllers: [StarshipController],
  providers: [
    {
      provide: 'StarshipRepository',
      useClass: TypeOrmStarshipRepository,
    },
    {
      provide: 'UserGetAll',
      useFactory: (repository: TypeOrmStarshipRepository) =>
        new StarshipGetAll(repository),
      inject: ['StarshipRepository'],
    },
  ],
})
export class StarshipModule {}
