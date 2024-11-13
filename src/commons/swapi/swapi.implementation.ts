import { HttpService } from '@nestjs/axios';
import { Injectable, Query } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SwapiImplementationService {
  private readonly apiKey: string;
  private readonly accessToken: string;
  private readonly swapi: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.swapi = this.configService.get('SWAPI_HOST');
    // this.apiKey = this.configService.get<string>(SWAPI_KEY);
    // this.accessToken = this.configService.get<string>(SWAPI_TOKEN);
  }

  async getStarShips(): Promise<any> {
    return this.httpService.axiosRef.get<any>(this.swapi);
  }

  async getStarShipById(id: number): Promise<any> {
    return this.httpService.axiosRef.get<any>(this.swapi + `/${id}/`);
  }
}
