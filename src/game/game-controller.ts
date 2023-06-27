import { type Board } from '../core/Board/Board.js';
import type DrawableManager from '../core/ItemManager/type.js';
import { type Snake } from '../core/Snake/Snake.js';
import { type MovementManager } from '../core/movement/MovementManager/MovementManager.js';
import { Direction } from '../core/types.js';
import { type Drawable, type SnakeRenderEngine } from '../ui/render-engine.js';
import { EngineCollisionManager } from './EngineCollisionManager/EngineCollisionManager.js';
import { type GameLoop } from './GameLoop/GameLoop.js';

export interface Game {
  start(): void;
}

/**
 * This clase is responsable of control the game
 */
export class GameController implements Game {
  #renderEngine: SnakeRenderEngine;
  #itemManager: DrawableManager;
  #board: Board;
  #snake: Snake;
  #gameLoop: GameLoop;
  #snakeMovementManager: MovementManager;

  // eslint-disable-next-line max-params
  constructor(
    itemManager: DrawableManager,
    board: Board,
    snake: Snake,
    gameLoop: GameLoop,
    snakeMovementManager: MovementManager,
    renderEngine: SnakeRenderEngine,
  ) {
    this.#renderEngine = renderEngine;
    this.#itemManager = itemManager;
    this.#board = board;
    this.#snake = snake;
    this.#gameLoop = gameLoop;
    this.#snakeMovementManager = snakeMovementManager;
  }

  start() {
    /**
     * In order to draw an element:
     *  1. Create a drawable object
     *  2. Draw the element in the UI
     *  3. Renders the entire UI
     */

    const snakeBody = this.#snake.getBodySegments();

    this.#renderEngine.addExitListener(() => {
      process.exit();
    });

    this.#renderEngine.addMoveListener(key => {
      const keyDirectionMap = new Map<string, Direction>([
        ['w', Direction.UP],
        ['s', Direction.DOWN],
        ['a', Direction.LEFT],
        ['d', Direction.RIGHT],
      ]);

      if (Array.from(keyDirectionMap.keys()).includes(key.name)) {
        this.#snake.changeDirection(keyDirectionMap.get(key.name)!);
      }
    });

    const collisionManager = new EngineCollisionManager();
    const checkSnakeCollision = () => {
      for (let i = 1; i < snakeBody.length; i++) {
        if (collisionManager.checkCollision(snakeBody[0], snakeBody[i])) {
          return true;
        }
      }

      return false;
    };

    this.#gameLoop.addResetHandler(() => {
      this.#resetHandler();
    });

    this.#gameLoop.addAdvanceHandler(() => {
      this.#snake.advance(this.#snakeMovementManager);

      this.#drawElements(snakeBody);
    });

    this.#gameLoop.addAdvanceHandler(() => {
      const snakeHead = snakeBody[0];

      this.#itemManager.createItemOnGenerationInterval(
        this.#gameLoop.getTotalRunningTime(),
        this.#board,
      );

      for (const [number, item] of this.#itemManager.getItems()) {
        const isCollision = collisionManager.checkCollision(snakeHead, item);
        const isItemDead = item.isDead();

        if (isItemDead) {
          this.#itemManager.delete(number);
        }

        if (isCollision) {
          this.#itemManager.delete(number);
        }

        this.#renderEngine.drawElement(item);
      }
    });

    this.#gameLoop.addAdvanceHandler(() => {
      const borders = this.#board.getBorders();

      this.#drawElements(borders);
    });

    this.#gameLoop.addCollisionHandler(gameLoop => {
      if (checkSnakeCollision()) {
        this.#renderEngine.showGameOver();
        gameLoop.stop();
      }
    });

    this.#gameLoop.addRenderHandler(() => {
      this.#renderHandler();
    });

    this.#gameLoop.start();
  }

  #drawElements(drawables: Drawable[]) {
    for (const drawable of drawables) {
      this.#renderEngine.drawElement(drawable);
    }
  }

  #resetHandler() {
    this.#renderEngine.clearGameScreen();
  }

  #renderHandler() {
    this.#renderEngine.render();
  }
}
