import { MenuManager } from './Menu/MenuManager/MenuManager.js';
import { NodeMenu } from './Menu/NodeMenu/NodeMenu.js';
import NodeMenuItem from './Menu/NodeMenuItem/NodeMenuItem.js';
import { OptionsCollection } from './Menu/OptionsCollection/OptionsCollection.js';
import ReadLineNode from './Menu/ReadLineNode/ReadLineNode.js';
import { GameController } from './game/game-controller.js';

const game = new GameController();

const readline = new ReadLineNode();

const optionsCollection = new OptionsCollection<string>();
optionsCollection.add('Start');
optionsCollection.add('Exit');
const nodeMenu = new NodeMenu(optionsCollection);
nodeMenu.showMenu();

const action = new NodeMenuItem('Start');
action.register(game.start);
const menuManager = new MenuManager(readline, action);
menuManager.handleOptionChoose();
