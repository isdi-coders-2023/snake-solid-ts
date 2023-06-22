import ItemManagerMock from '../__mocks__/ItemManagerMock';
import { Board } from '../core/Board/Board';
import { Snake } from '../core/Snake/Snake';
import { MovementManager } from '../core/movement/MovementManager/MovementManager';
import { type Coordinates } from '../ui/render-engine';
import { GameLoop } from './GameLoop/GameLoop';
import { GameController } from './game-controller';

describe('Given a Game Controller', () => {
  let gameController: GameController;

  beforeEach(() => {
    const itemManagerMock = new ItemManagerMock({} as Coordinates);
    gameController = new GameController(
      itemManagerMock,
      new Board(),
      new Snake(),
      new GameLoop(),
      new MovementManager(new Board()),
    );
  });

  it('When created, then it should be defined', () => {
    expect(gameController).toBeDefined();
  });
});
