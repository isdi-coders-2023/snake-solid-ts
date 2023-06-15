import type Item from '../core/Item/Item.js';
import { ItemType } from '../core/Item/Item.js';
import type ItemManagement from '../core/ItemManager/type.js';
import { Snake } from '../core/Snake/Snake.js';
import { Direction } from '../core/types.js';
import { ConsoleRenderEngine } from '../ui/console-render/console-render-engine.js';
import { GameLoop } from './GameLoop/GameLoop.js';

/**
 * This clase is responsable of control the game
 */
export class GameController {
  #renderEngine: ConsoleRenderEngine;
  #drawableItems: Set<Item> = new Set<Item>([]);
  #itemCreator: ItemManagement;
  #gameLoop: GameLoop;

  constructor(itemManager: ItemManagement) {
    /** SORRY FOR THIS SOLID VIOLATION */
    this.#renderEngine = new ConsoleRenderEngine();
    this.#gameLoop = new GameLoop();
    this.#itemCreator = itemManager;
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

    this.#gameLoop.addAdvanceHandler(() => {
      this.#renderEngine.clearGameScreen();
      snake.advance();

      this.#storeDrawableItems(ItemType.food);

      for (const item of this.#drawableItems) {
        this.#renderEngine.drawElement(item);
      }

      for (const bodySegment of snakeBody) {
        this.#renderEngine.drawElement(bodySegment);
      }

      this.#renderEngine.render();
    });

    this.#gameLoop.start();
  }

  #storeDrawableItems(itemType: ItemType): void {
    const item = this.#itemCreator.generateItem(itemType, this.#gameLoop.getTotalRunningTime());

    if (item) {
      this.#drawableItems.add(item);
    }
  }
}
