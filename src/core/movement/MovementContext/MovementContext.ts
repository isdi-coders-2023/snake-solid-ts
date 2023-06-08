import { Direction } from '../../types';

export class MovementContext {
  #direction: Direction;

  constructor(direction: Direction = Direction.RIGHT) {
    this.#direction = direction;
  }

  getDirection() {
    return this.#direction;
  }

  setDirection(direction: Direction) {
    this.#direction = direction;
  }
}
