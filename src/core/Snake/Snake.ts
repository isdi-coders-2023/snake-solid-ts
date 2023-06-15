import { SnakeBody } from '../Body/Body.js';
import { defaultSnakeConfig } from '../constants.js';
import { type MovementManager } from '../movement/MovementManager/MovementManager.js';
import { type SnakeConfig } from '../types';

export class Snake {
  #body: SnakeBody;

  constructor(config: SnakeConfig = defaultSnakeConfig) {
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

  advance(movementManager: MovementManager) {
    this.#body.move(movementManager);
  }
}
