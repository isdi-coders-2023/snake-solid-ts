import { randomUUID } from 'crypto';
import { defaultGameSpeed } from '../../core/constants.js';
import {
  type AdvancePhase,
  type CollisionPhase,
  type GameLoopHandler,
  type LifeCycle,
  type RenderPhase,
  type ResetPhase,
} from './types.js';

export class GameLoop implements LifeCycle, AdvancePhase, CollisionPhase, RenderPhase, ResetPhase {
  #speed: number;
  #interval: NodeJS.Timer | undefined;
  #isRunning = false;
  #runnningTime = 0;
  #advanceHandlers = new Map<string, GameLoopHandler>();
  #collisionHandlers = new Map<string, GameLoopHandler>();
  #renderHandlers = new Map<string, GameLoopHandler>();
  #resetHandlers = new Map<string, GameLoopHandler>();

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

  #advanceAll() {
    this.#resetHandlers.forEach(resetHandler => {
      resetHandler(this);
    });

    this.#advanceHandlers.forEach(advanceable => {
      advanceable(this);
    });

    this.#collisionHandlers.forEach(collisionHandler => {
      collisionHandler(this);
    });

    this.#renderHandlers.forEach(renderHandler => {
      renderHandler(this);
    });
  }

  changeSpeed(speed: number) {
    this.#clearInterval();
    this.#speed = speed;

    if (this.#isRunning) {
      this.start();
    }
  }

  getCurrentSpeed(): number {
    return this.#speed;
  }

  #clearInterval() {
    clearInterval(this.#interval);
  }

  #increaseRunningTime() {
    this.#runnningTime += this.#speed;
  }

  #createHandlerId(): string {
    return randomUUID();
  }

  addResetHandler(resetHandler: GameLoopHandler): string {
    const resetHandlerId = this.#createHandlerId();

    this.#resetHandlers.set(resetHandlerId, resetHandler);

    return resetHandlerId;
  }

  removeResetHandler(resetHandlerId: string): void {
    this.#resetHandlers.delete(resetHandlerId);
  }

  addAdvanceHandler(advanceHandler: GameLoopHandler) {
    const advanceHandlerId = this.#createHandlerId();

    this.#advanceHandlers.set(advanceHandlerId, advanceHandler);

    return advanceHandlerId;
  }

  removeAdvanceHandler(advanceHandlerId: string): void {
    this.#advanceHandlers.delete(advanceHandlerId);
  }

  addCollisionHandler(collisionHandler: GameLoopHandler): string {
    const collisionHandlerId = this.#createHandlerId();

    this.#collisionHandlers.set(collisionHandlerId, collisionHandler);

    return collisionHandlerId;
  }

  removeCollisionHandler(collisionHandlerId: string): void {
    this.#collisionHandlers.delete(collisionHandlerId);
  }

  addRenderHandler(renderHandler: GameLoopHandler): string {
    const renderHandlerId = this.#createHandlerId();

    this.#renderHandlers.set(renderHandlerId, renderHandler);

    return renderHandlerId;
  }

  removeRenderHandler(renderHandlerId: string): void {
    this.#renderHandlers.delete(renderHandlerId);
  }
}
