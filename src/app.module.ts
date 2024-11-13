import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmStarshipEntity } from './lib/Starships/infrastructure/TypeORM/TypeOrmStarshipEntity';
import { StarshipModule } from './lib/Starships/infrastructure/starship.module';
import { SwapiImplementationService } from './commons/swapi/swapi.implementation';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot(),
    //
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASS'),
        database: configService.get('DB_DATABASE'),
        entities: [TypeOrmStarshipEntity],
      }),
      inject: [ConfigService],
    }),

    HttpModule,
    StarshipModule,
  ],
  providers: [
    SwapiImplementationService
  ]
})
export class AppModule {}
