import { Starship } from '../Starship';

export interface StarshipRepository {
  create(user: Starship): Promise<void>;

  getAll(): Promise<Starship[]>;

  getByBName(starship_name: string): Promise<Starship | null>;

  // updateByName(starship_name: string, starship: any): Promise<Starship>;
  updateByName(starship_name: string, starship: any): any;
}
