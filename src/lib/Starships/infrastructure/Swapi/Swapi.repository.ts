import { Starship } from '../../domain/Starship';
import { SwapiImplementationService } from '../../../../commons/swapi/swapi.implementation';
import { Inject } from '@nestjs/common';
import { TypeOrmStarshipEntity } from '../TypeORM/TypeOrmStarshipEntity';

export class SwapiRepository {
  constructor(
    @Inject(SwapiImplementationService)
    private readonly swapi: SwapiImplementationService,
  ) {}

  private mapToDomain(u: TypeOrmStarshipEntity) {
    return new Starship(
      u.name,
      u.model,
      u.manufacturer,
      u.starship_class,
      u.cost_in_credits,
      u.passengers,
      u.cargo_capacity,
    );
  }

  async getAllStarships() {
    const starShips = await this.swapi.getStarShips();
    const starShipsData = starShips.data?.results || [];
    return starShipsData.map((starship: TypeOrmStarshipEntity) =>
      this.mapToDomain(starship).toPlainObject(),
    );
  }

  async getStarshipById(id: number) {
    const starships = await this.swapi.getStarShipById(id);
    return this.mapToDomain(starships.data).toPlainObject();
  }
}
