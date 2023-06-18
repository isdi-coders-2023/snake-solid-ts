import { Board } from '../core/Board/Board.js';
import { ItemType } from '../core/Item/Item.js';
import type DrawableManager from '../core/ItemManager/type.js';
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
  #itemManager: DrawableManager;

  constructor(itemManager: DrawableManager) {
    /** SORRY FOR THIS SOLID VIOLATION */
    this.#renderEngine = new ConsoleRenderEngine();
    this.#itemManager = itemManager;
  }

  start() {
    /**
     * In order to draw an element:
     *  1. Create a drawable object
     *  2. Draw the element in the UI
     *  3. Renders the entire UI
     */

    const board = new Board({ isInfinite: true, height: 20, width: 100, borderWidth: 1 });

    const snake: Snake = new Snake({
      length: 5,
      coordinates: { x: 5, y: 5 },
      direction: Direction.RIGHT,
    });
    const snakeBody = snake.getBody();

    const gameLoop = new GameLoop();

    const snakeMovementManager = new MovementManager(board);

    gameLoop.addAdvanceHandler(() => {
      this.#renderEngine.clearGameScreen();

      snake.advance(snakeMovementManager);

      this.#itemManager.generateItem(ItemType.food, gameLoop.getTotalRunningTime(), board);

      for (const [, item] of this.#itemManager.getItems()) {
        this.#renderEngine.drawElement(item);
      }

      for (const bodySegment of snakeBody) {
        this.#renderEngine.drawElement(bodySegment);
      }

      this.#drawBorders(board);

      this.#renderEngine.render();
    });

    gameLoop.start();
  }

  #drawBorders(board: Board) {
    const boardBorders = board.getBorders();

    for (const border of boardBorders) {
      this.#renderEngine.drawElement(border);
    }
  }
}
