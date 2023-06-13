import { Snake } from '../core/Snake/Snake.js';
import { Direction } from '../core/types.js';
import { ConsoleRenderEngine } from '../ui/console-render/console-render-engine.js';
import { GameLoop } from './GameLoop/GameLoop.js';

/**
 * This clase is responsable of control the game
 */
export class GameController {
  #renderEngine: ConsoleRenderEngine;

  constructor() {
    /** SORRY FOR THIS SOLID VIOLATION */
    this.#renderEngine = new ConsoleRenderEngine();
  }

  start() {
    /**
     * In order to draw an element:
     *  1. Create a drawable object
     *  2. Draw the element in the UI
     *  3. Renders the entire UI
     */
    const snake: Snake = new Snake({
      length: 5,
      coordinates: { x: 5, y: 5 },
      direction: Direction.DOWN,
    });
    const snakeBody = snake.getBody();

    const gameLoop = new GameLoop();

    gameLoop.addAdvanceHandler(() => {
      this.#renderEngine.clearGameScreen();

      for (const bodySegment of snakeBody) {
        this.#renderEngine.drawElement(bodySegment);
      }

      this.#renderEngine.render();
    });

    gameLoop.start();
  }
}
