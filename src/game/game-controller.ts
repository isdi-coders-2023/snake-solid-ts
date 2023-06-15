import { Board } from '../core/Board/Board.js';
import { Snake } from '../core/Snake/Snake.js';
import { MovementManager } from '../core/movement/MovementManager/MovementManager.js';
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
      direction: Direction.RIGHT,
    });
    const snakeBody = snake.getBody();

    const gameLoop = new GameLoop();

    const board = new Board();

    const snakeMovementManager = new MovementManager(board);

    gameLoop.addAdvanceHandler(() => {
      this.#renderEngine.clearGameScreen();

      snake.advance(snakeMovementManager);

      for (const bodySegment of snakeBody) {
        this.#renderEngine.drawElement(bodySegment);
      }

      this.#renderEngine.render();
    });

    gameLoop.start();
  }
}
