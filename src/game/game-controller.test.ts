import { GameController } from './game-controller';

describe('Given a Game Controller', () => {
  let gameController: GameController;

  beforeEach(() => {
    gameController = new GameController();
  });

  it('When created, then it should be defined', () => {
    expect(gameController).toBeDefined();
  });
});
