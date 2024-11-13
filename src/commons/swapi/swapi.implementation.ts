import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SwapiImplementationService {
  private readonly swapi: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.swapi = this.configService.get('SWAPI_HOST');
  }

  async getStarShips(): Promise<any> {
    return this.httpService.axiosRef.get<any>(this.swapi);
  }

  async getStarShipById(id: number): Promise<any> {
    return this.httpService.axiosRef.get<any>(this.swapi + `/${id}/`);
  }
}
