import { defaultGameSpeed } from '../../core/constants.js';
import { type AdvanceHandler } from './types.js';

export class GameLoop {
  #advanceables: AdvanceHandler[] = [];
  #speed;
  #interval: NodeJS.Timer | undefined;
  #isRunning = false;

  constructor(speed = defaultGameSpeed) {
    this.#speed = speed;
  }

  start() {
    this.#isRunning = true;
    this.#advanceAll();
    this.#interval = setInterval(() => {
      this.#advanceAll();
    }, this.#speed);
  }

  stop() {
    this.#isRunning = false;
    this.#clearInterval();
  }

  addAdvanceHandler(advanceable: AdvanceHandler) {
    this.#advanceables.push(advanceable);
  }

  #advanceAll() {
    this.#advanceables.forEach(advanceable => {
      advanceable();
    });
  }

  changeSpeed(speed: number) {
    this.#clearInterval();
    this.#speed = speed;

    if (this.#isRunning) {
      this.start();
    }
  }

  #clearInterval() {
    clearInterval(this.#interval);
  }
}
