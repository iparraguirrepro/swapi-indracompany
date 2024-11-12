import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmStarshipEntity } from './lib/Starships/infrastructure/TypeORM/TypeOrmStarshipEntity';
import { StarshipModule } from './lib/Starships/infrastructure/infrastructure.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'swapi_indra',
      entities: [TypeOrmStarshipEntity],
    }),

    StarshipModule,
  ],
})
export class AppModule {}
