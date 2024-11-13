import { Starship } from '../Starship';

export interface StarshipRepository {
  create(user: Starship): Promise<void>;
  create(user: Starship[]): Promise<void>;

  getAllStored(): Promise<Starship[]>;
}
