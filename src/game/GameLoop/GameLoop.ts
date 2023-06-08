import { defaultGameSpeed } from '../../core/constants.js';
import { type AdvanceHandler } from './types.js';

export class GameLoop {
  #advanceables: AdvanceHandler[] = [];
  #speed;
  #interval: NodeJS.Timer | undefined;

  constructor(speed = defaultGameSpeed) {
    this.#speed = speed;
  }

  start() {
    this.#advanceAll();
    this.#interval = setInterval(() => {
      this.#advanceAll();
    }, this.#speed);
  }

  stop() {
    clearInterval(this.#interval);
  }

  addAdvanceHandler(advanceable: AdvanceHandler) {
    this.#advanceables.push(advanceable);
  }

  #advanceAll() {
    this.#advanceables.forEach(advanceable => {
      advanceable();
    });
  }
}
