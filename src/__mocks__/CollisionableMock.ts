import { type Collisionable, type Coordinates } from '../ui/render-engine';

export class CollisionableMock implements Collisionable {
  #mockedCoordinates: Coordinates;

  constructor(coordinates: Coordinates) {
    this.#mockedCoordinates = coordinates;
  }

  getCoordinates(): Coordinates {
    return this.#mockedCoordinates;
  }
}
