import { Board } from '../core/Board/Board.js';
import ItemManager from '../core/ItemManager/ItemManager.js';
import { Snake } from '../core/Snake/Snake.js';
import { MovementManager } from '../core/movement/MovementManager/MovementManager.js';
import { Direction } from '../core/types.js';
import { GameLoop } from '../game/GameLoop/GameLoop.js';
import { GameController } from '../game/game-controller.js';
import MenuItemsCollection from './MenuItemsCollection/MenuItemsCollection.js';
import NodeMenu from './NodeMenu/NodeMenu.js';
import NodeMenuItem from './NodeMenuItem/NodeMenuItem.js';
import ReadLineNode from './ReadLineNode/ReadLineNode.js';
import { type Menu } from './interfaces/Menu.js';

const createNodeMenu = (): Menu => {
  const readline = new ReadLineNode();

  const startAction = () => {
    const itemManager = new ItemManager();
    const height = 20;
    const width = 100;
    const board = new Board({ isInfinite: true, height, width, borderWidth: 1 });
    const snake: Snake = new Snake({
      length: 5,
      coordinates: { x: width / 2, y: height / 2 },
      direction: Direction.RIGHT,
    });
    const gameLoop = new GameLoop();
    const snakeMovementManager = new MovementManager(board);
    const game = new GameController(itemManager, board, snake, gameLoop, snakeMovementManager);
    game.start();
  };

  const exitAction = () => {
    readline.close();
  };

  const startOption = new NodeMenuItem('start', '1', startAction);
  const exitOption = new NodeMenuItem('exit', '2', exitAction);
  const menuItems = new MenuItemsCollection();

  menuItems.add(startOption);
  menuItems.add(exitOption);

  const nodeMenu = new NodeMenu(menuItems, readline);

  return nodeMenu;
};

export default createNodeMenu;
