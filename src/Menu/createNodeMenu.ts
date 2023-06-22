import ItemManager from '../core/ItemManager/ItemManager.js';
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
    const game = new GameController(itemManager);
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
