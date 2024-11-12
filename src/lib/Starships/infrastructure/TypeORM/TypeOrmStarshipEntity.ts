import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('starship')
export class TypeOrmStarshipEntity {
  @PrimaryColumn()
  name: string;

  @Column()
  model: string;

  @Column()
  manufacturer: string;

  @Column()
  starship_class: string;

  @Column()
  cost_in_credits: number;

  @Column()
  passengers: number;

  @Column()
  cargo_capacity: number;

  @Column()
  createdAt: Date;
}
