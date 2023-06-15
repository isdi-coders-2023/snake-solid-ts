import { SnakeBody } from '../Body/Body.js';
import { defaultConfig } from '../constants.js';
import { type SnakeConfig } from '../types';

export class Snake {
  #body: SnakeBody;

  constructor(config: SnakeConfig = defaultConfig) {
    this.#body = this.#createBody(config);
  }

  getLength() {
    return this.#body.getLength();
  }

  getBody() {
    return this.#body.getBodySegments();
  }

  #createBody(config: SnakeConfig) {
    return new SnakeBody(config);
  }

  advance() {
    this.#body.move();
  }
}
