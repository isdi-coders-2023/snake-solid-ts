// import { GameController } from './game/game-controller.js';
import { NodeMenu } from './Menu/NodeMenu/NodeMenu.js';
import ReadLineNode from './Menu/ReadLineMenu/ReadLineMenu.js';

// const game = new GameController();
// game.start();

const readline = new ReadLineNode();
const nodeMenu = new NodeMenu(readline);
nodeMenu.showMenu();
