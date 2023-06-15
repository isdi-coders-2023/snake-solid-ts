import { defaultGameSpeed } from '../../core/constants.js';
import { type AdvanceHandler } from './types.js';

export class GameLoop {
  #advanceables: AdvanceHandler[] = [];
  #speed;
  #interval: NodeJS.Timer | undefined;
  #isRunning = false;
  #runnningTime = 0;

  constructor(speed = defaultGameSpeed) {
    this.#speed = speed;
  }

  start() {
    this.#isRunning = true;
    this.#tick();
    this.#interval = setInterval(() => {
      this.#tick();
    }, this.#speed);
  }

  #tick() {
    this.#advanceAll();
    this.#increaseRunningTime();
  }

  stop() {
    this.#isRunning = false;
    this.#clearInterval();
  }

  getTotalRunningTime() {
    return this.#runnningTime;
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

  #increaseRunningTime() {
    this.#runnningTime += this.#speed;
  }
}
