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

  async getAll() {
    const user = await this.repository.find();

    return user.map((u) => this.mapToDomain(u));
  }

  async create(user: Starship): Promise<void> {
    // await this.repository.save({
    //   id: user.id.value,
    //   name: user.name.value,
    //   email: user.email.value,
    //   createdAt: user.createdAt.value,
    // });
  }

  async getByBName(name: string): Promise<Starship> {
    // const user = await this.repository.findOne({
    //   where: {
    //     id: name,
    //   },
    // });
    //
    // if (!user) return null;

    return this.mapToDomain(null);
  }

  async updateByName(starship_name: string, starship: any): Promise<void> {
    // await this.repository.update(user.id.value, {
    //   name: user.name.value,
    //   email: user.email.value,
    //   createdAt: user.createdAt.value,
    // });
  }
}
