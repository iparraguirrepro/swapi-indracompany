import { StarshipRepository } from '../domain/ports/StarshipRepository';
import { Starship } from '../domain/Starship';
import StarshipCommand from './commands/Starship.command';

export class StarshipCreate {
  constructor(private repository: StarshipRepository) {}

  async run(command: StarshipCommand): Promise<void> {
    const starship = new Starship(
      command.name,
      command.model,
      command.manufacturer,
      command.starship_class,
      command.cost_in_credits,
      command.passengers,
      command.cargo_capacity,
    );

    return this.repository.create(starship);
  }
}
