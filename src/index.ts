import ItemManager from './core/ItemManager/ItemManager.js';
import { GameController } from './game/game-controller.js';

const itemManager = new ItemManager();
const game = new GameController(itemManager);
game.start();
