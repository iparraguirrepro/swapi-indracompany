import { Starship } from '../domain/Starship';
import { StarshipRepository } from '../domain/ports/StarshipRepository';

export class StarshipGetAll {
  constructor(private repository: StarshipRepository) {}

  async run(): Promise<Starship[]> {
    return this.repository.getAll();
  }
}
