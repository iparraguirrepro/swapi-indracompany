import { StarshipRepository } from '../domain/ports/StarshipRepository';
import { Starship } from '../domain/Starship';
import StarshipCommand from './commands/Starship.command';

export class StarshipBulk {
  constructor(private repository: StarshipRepository) {}

  async run(command: StarshipCommand[]): Promise<void> {
    const starShips = [];
    for (const starshipCommand of command) {
      const starship: any = new Starship(
        starshipCommand.name,
        starshipCommand.model,
        starshipCommand.manufacturer,
        starshipCommand.starship_class,
        starshipCommand.cost_in_credits,
        starshipCommand.passengers,
        starshipCommand.cargo_capacity,
      );

      starShips.push(starship);
    }

    await this.repository.create(starShips);
  }
}
