import { type Collisionable, type Coordinates } from '../../ui/render-engine';

class Item implements Collisionable {
  #coordinates: Coordinates;

  constructor() {
    this.#coordinates = this.#generateCoordinates();
  }

  public getCoordinates(): Coordinates {
    return this.#coordinates;
  }

  #getRandomInteger(maxNumber: number): number {
    return Math.floor(Math.random() * maxNumber);
  }

  #generateCoordinates() {
    const randomPositionX = this.#getRandomInteger(100);
    const randomPositionY = this.#getRandomInteger(100);

    return {
      x: randomPositionX,
      y: randomPositionY,
    };
  }
}

export default Item;
