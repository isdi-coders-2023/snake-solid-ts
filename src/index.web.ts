import { Board } from './core/Board/Board.js';
import ItemManager from './core/ItemManager/ItemManager.js';
import { Snake } from './core/Snake/Snake.js';
import { MovementManager } from './core/movement/MovementManager/MovementManager.js';
import { Direction } from './core/types.js';
import { GameLoop } from './game/GameLoop/GameLoop.js';
import { GameController } from './game/game-controller.js';
import { CanvasRenderEngine } from './ui/canvas-render/canvas-render-engine.js';

const itemManager = new ItemManager();
const height = 450;
const width = 450;
const board = new Board({ isInfinite: true, height, width, borderWidth: 1 });
const snake: Snake = new Snake({
  length: 20,
  coordinates: { x: width / 2, y: height / 2 },
  direction: Direction.RIGHT,
});
const gameLoop = new GameLoop(() => window.crypto.randomUUID(), 50);
const snakeMovementManager = new MovementManager(board);
const renderEngine = new CanvasRenderEngine('game');
const game = new GameController(
  itemManager,
  board,
  snake,
  gameLoop,
  snakeMovementManager,
  renderEngine,
);
game.start();
