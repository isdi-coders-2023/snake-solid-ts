import { SnakeBody } from '../Body/Body';
import { defaultConfig } from '../constants';
import { type SnakeConfig } from '../types';

export class Snake {
  #body: SnakeBody;

  constructor(config: SnakeConfig = defaultConfig) {
    this.#body = this.#createBody(config);
  }

  getLength() {
    return this.#body.getLength();
  }

  #createBody(config: SnakeConfig) {
    return new SnakeBody(config);
  }
}
