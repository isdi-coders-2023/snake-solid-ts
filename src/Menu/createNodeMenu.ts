import winston from 'winston';
import { GameController } from '../game/game-controller.js';
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
    const game = new GameController();
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
