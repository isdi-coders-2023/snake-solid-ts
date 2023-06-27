/* eslint-disable @typescript-eslint/no-empty-function */
import { type SnakeRenderEngine } from './render-engine';

export class MockRenderEngine implements SnakeRenderEngine {
  render(): void {}

  drawElement(): void {}

  clearGameScreen(): void {}

  showGameOver(): void {}

  addExitListener(): void {}

  addMoveListener(): void {}

  addKeyListener(): void {}

  updateScore(): void {}

  resetScore(): void {}
}
