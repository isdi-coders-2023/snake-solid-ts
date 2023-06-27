import { randomUUID } from 'crypto';
import winston from 'winston';
import { Board } from '../core/Board/Board.js';
import ItemManager from '../core/ItemManager/ItemManager.js';
import { Snake } from '../core/Snake/Snake.js';
import { MovementManager } from '../core/movement/MovementManager/MovementManager.js';
import { Direction } from '../core/types.js';
import { GameLoop } from '../game/GameLoop/GameLoop.js';
import { GameController } from '../game/game-controller.js';
import { ConsoleRenderEngine } from '../ui/console-render/console-render-engine.js';
import MenuItemsCollection from './MenuItemsCollection/MenuItemsCollection.js';
import NodeMenu from './NodeMenu/NodeMenu.js';
import NodeMenuItem from './NodeMenuItem/NodeMenuItem.js';
import ReadLineNode from './ReadLineNode/ReadLineNode.js';
import { type Menu } from './interfaces/Menu.js';

const createNodeMenu = (): Menu => {
  const logger = winston.createLogger({
    transports: [
      new winston.transports.Console({
        format: winston.format.printf(log => log.message as string),
      }),
    ],
  });

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
    const gameLoop = new GameLoop(randomUUID);
    const snakeMovementManager = new MovementManager(board);
    const renderEngine = new ConsoleRenderEngine();
    const game = new GameController(
      itemManager,
      board,
      snake,
      gameLoop,
      snakeMovementManager,
      renderEngine,
    );
    game.start();
    readline.close();
  };

  const exitAction = () => {
    logger.info('See you soon!');
    readline.close();
  };

  const startOption = new NodeMenuItem('start', '1', startAction);
  const exitOption = new NodeMenuItem('exit', '2', exitAction);
  const menuItems = new MenuItemsCollection();

  menuItems.add(startOption);
  menuItems.add(exitOption);

  const nodeMenu = new NodeMenu(menuItems, readline, logger);

  return nodeMenu;
};

export default createNodeMenu;
