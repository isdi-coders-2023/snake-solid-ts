import { MenuManager } from './Menu/MenuManager/MenuManager.js';
import NodeMenu from './Menu/NodeMenu/NodeMenu.js';
import NodeMenuItem from './Menu/NodeMenuItem/NodeMenuItem.js';
import { OptionsCollection } from './Menu/OptionsCollection/OptionsCollection.js';
import ReadLineNode from './Menu/ReadLineNode/ReadLineNode.js';
import { type MenuItem } from './Menu/interfaces/MenuItem.js';
import { GameController } from './game/game-controller.js';

const readline = new ReadLineNode();

const startAction = () => {
  const game = new GameController();
  game.start();
};

const optionsCollection = new OptionsCollection<MenuItem>();
const startOption = new NodeMenuItem('start', '1');
startOption.register(startAction);
const exitOption = new NodeMenuItem('exit', '2');
exitOption.register(() => {
  readline.close();
});
optionsCollection.add(startOption);
optionsCollection.add(exitOption);
const nodeMenu = new NodeMenu(optionsCollection);
nodeMenu.showMenu();

const menuManager = new MenuManager(readline, optionsCollection);
menuManager.handleOptionChoose();
