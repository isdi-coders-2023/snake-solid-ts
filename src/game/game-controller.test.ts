import { randomUUID } from 'crypto';
import ItemManagerMock from '../__mocks__/ItemManagerMock';
import { Board } from '../core/Board/Board';
import { Snake } from '../core/Snake/Snake';
import { MovementManager } from '../core/movement/MovementManager/MovementManager';
import { MockRenderEngine } from '../ui/mock-render-engine.mock';
import { type Coordinates, type SnakeRenderEngine } from '../ui/render-engine';
import { GameLoop } from './GameLoop/GameLoop';
import { GameController } from './game-controller';

describe('Given a Game Controller', () => {
  let gameController: GameController;
  const renderEngine: SnakeRenderEngine = new MockRenderEngine();

  beforeEach(() => {
    const itemManagerMock = new ItemManagerMock({} as Coordinates);
    gameController = new GameController(
      itemManagerMock,
      new Board(),
      new Snake(),
      new GameLoop(randomUUID),
      new MovementManager(new Board()),
      renderEngine,
    );
  });

  it('When created, then it should be defined', () => {
    expect(gameController).toBeDefined();
  });
});
