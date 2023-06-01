import { defaultSnakeLength } from '../constants';

export class Snake {
  #snakeLength: number;

  constructor(length: number = defaultSnakeLength) {
    this.#snakeLength = length;
  }

  getLength() {
    return this.#snakeLength;
  }
}
