import { StarshipRepository } from '../domain/ports/StarshipRepository';
import { Starship } from '../domain/Starship';
import { StarshipNotfound } from '../domain/StarshipNotfound';

export class StarshipGetById {
  constructor(private repository: StarshipRepository) {}

  async run(name: string): Promise<Starship> {
    const starship = await this.repository.getByBName(name);

    if (!starship) throw new StarshipNotfound('Starship not found');

    return starship;
  }
}
