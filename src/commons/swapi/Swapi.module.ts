import { Module } from '@nestjs/common';
import { SwapiImplementationService } from './swapi.implementation';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ConfigModule, HttpModule],
  controllers: [],
  providers: [SwapiImplementationService],
  exports: [SwapiImplementationService],
})
export class SwapiModule {}
