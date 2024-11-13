import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmStarshipEntity } from './TypeOrmStarshipEntity';
import { StarshipRepository } from '../../domain/ports/StarshipRepository';
import { Starship } from '../../domain/Starship';

export class TypeOrmStarshipRepository implements StarshipRepository {
  constructor(
    @InjectRepository(TypeOrmStarshipEntity)
    private readonly repository: Repository<TypeOrmStarshipEntity>,
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

  async getAllStored() {
    const user = await this.repository.find();

    return user.map((u) => this.mapToDomain(u));
  }

  async create(starship): Promise<void> {
    await this.repository.save(starship);
  }
}
