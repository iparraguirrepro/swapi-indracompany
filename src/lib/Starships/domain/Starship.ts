export class Starship {
  private name: string;

  private readonly model: string;

  private readonly manufacturer: string;

  private readonly starship_class: string;

  private readonly cost_in_credits: number;

  private readonly passengers: number;

  private readonly cargo_capacity: number;

  private created: Date;

  constructor(
    name: string,
    model: string,
    manufacturer: string,
    starship_class: string,
    cost_in_credits: number,
    passengers: number,
    cargo_capacity: number,
  ) {
    this.name = name;
    this.model = model;
    this.manufacturer = manufacturer;
    this.starship_class = starship_class;
    this.cargo_capacity = cargo_capacity;
    this.passengers = passengers;
    this.cost_in_credits = cost_in_credits || 0;
  }

  public toPlainObject() {
    return {
      nombre: this.name,
      modelo: this.model,
      manufactura: this.manufacturer,
      clase: this.starship_class,
      capacidad_carga: this.cargo_capacity,
      pasajeros: this.passengers,
      creado: this.created,
      costo: this.cost_in_credits
    };
  }
}
