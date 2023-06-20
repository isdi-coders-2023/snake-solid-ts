import ItemManager from './core/ItemManager/ItemManager.js';
import { GameController } from './game/game-controller.js';
import createNodeMenu from './Menu/createNodeMenu.js';

const itemManager = new ItemManager();
const game = new GameController(itemManager);
game.start();

const nodeMenu = createNodeMenu();
nodeMenu.showMenu();
nodeMenu.handleOptionChoose();
