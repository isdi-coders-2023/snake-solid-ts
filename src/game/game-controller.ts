import { ConsoleRenderEngine } from '../ui/console-render/console-render-engine.js';
import { type Drawable } from '../ui/render-engine.js';

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
    const square: Drawable = { getColor: () => 'red', getCoordinates: () => ({ x: 5, y: 5 }) };
    this.#renderEngine.drawElement(square);
    this.#renderEngine.render();
  }
}
