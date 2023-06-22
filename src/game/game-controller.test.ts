import ItemManagerMock from '../__mocks__/ItemManagerMock';
import { type Coordinates } from '../ui/render-engine';
import { GameController } from './game-controller';

describe('Given a Game Controller', () => {
  let gameController: GameController;

  beforeEach(() => {
    const itemManagerMock = new ItemManagerMock({} as Coordinates);
    gameController = new GameController(itemManagerMock);
  });

  it('When created, then it should be defined', () => {
    expect(gameController).toBeDefined();
  });
});
