import { type Coordinates, type Drawable } from '../../ui/render-engine';

abstract class ItemAbstract implements Drawable {
  #coordinates: Coordinates;

  constructor(coordinates: Coordinates) {
    this.#coordinates = coordinates;
  }

  public getCoordinates(): Coordinates {
    return this.#coordinates;
  }

  abstract getColor(): string;
}

export default ItemAbstract;
