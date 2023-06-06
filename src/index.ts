// import { GameController } from './game/game-controller.js';
import { NodeMenu } from './Menu/NodeMenu/NodeMenu.js';
import ReadLineNode from './Menu/ReadLineNode/ReadLineNode.js';

// const game = new GameController();
// game.start();

// const menuItem = new MenuItem();
// addMenuItem('option3')
const readline = new ReadLineNode();
const nodeMenu = new NodeMenu(readline);
nodeMenu.showMenu();
