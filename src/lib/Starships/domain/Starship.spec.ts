import { classToPlain } from 'class-transformer';
import { Starship } from './Starship';

describe('Starship [MD]', () => {
  it('should create an instance of Starship', () => {
    const starship = new Starship(
      'u.name',
      'u.model',
      'u.manufacturer',
      'u.starship_class',
      9000,
      9000,
      9000,
    );

    expect(starship).toBeInstanceOf(Starship);
    expect(starship.getDetails()).toBe('u.model - u.starship_class');
  });

  it('should convert to plain spanish object', () => {
    const starship = new Starship(
      'u.name',
      'u.model',
      'u.manufacturer',
      'u.starship_class',
      9000,
      9000,
      9000,
    );

    expect(starship.toPlainObject()).toEqual({
      nombre: 'u.name',
      modelo: 'u.model',
      manufactura: 'u.manufacturer',
      clase: 'u.starship_class',
      capacidad_carga: 9000,
      pasajeros: 9000,
      creado: undefined,
      costo: 9000,
    });
    expect(starship.toPlainObject()).toHaveProperty('creado');
  });
});
