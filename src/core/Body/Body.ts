import { type SnakeConfig } from '../types';

export class SnakeBody {
  #length: number;
  constructor(config: SnakeConfig) {
    this.#length = config.length;
  }

  getLength() {
    return this.#length;
  }
}
