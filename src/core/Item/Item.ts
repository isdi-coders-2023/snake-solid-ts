import { type Coordinates, type Drawable } from '../../ui/render-engine';

abstract class Item implements Drawable {
  #coordinates: Coordinates;
  #dead: Date;

  constructor(coordinates: Coordinates, lifespan: number) {
    this.#coordinates = coordinates;
    this.#dead = new Date(Date.now() + lifespan);
  }

  public getCoordinates(): Coordinates {
    return this.#coordinates;
  }

  public isDead(): boolean {
    return Date.now() >= this.#dead.getTime();
  }

  abstract getColor(): string;
}

export default Item;
