import { type Coordinates, type Drawable } from '../../ui/render-engine';

export class Border implements Drawable {
  #coordinates: Coordinates;
  #color: string;

  constructor(coordinates: Coordinates, color = 'yellow') {
    this.#coordinates = coordinates;
    this.#color = color;
  }

  getColor(): string {
    return this.#color;
  }

  getCoordinates(): Coordinates {
    return this.#coordinates;
  }
}
