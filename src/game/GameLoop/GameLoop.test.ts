import { GameLoop } from './GameLoop';
import { type GameLoopHandler } from './types';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Given a GameLoop', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      expect(typeof new GameLoop()).toBe('object');
    });

    test('Then its speed should be 200', () => {
      expect(new GameLoop().getCurrentSpeed()).toBe(200);
    });
  });

  describe('When it is started', () => {
    test('Then it should advance all the advanceables', () => {
      const gameLoop = new GameLoop();

      const advanceHandler1: GameLoopHandler = jest.fn();
      const advanceHandler2: GameLoopHandler = jest.fn();

      gameLoop.addAdvanceHandler(advanceHandler1);
      gameLoop.addAdvanceHandler(advanceHandler2);
      gameLoop.start();

      expect(advanceHandler1).toHaveBeenCalled();
      expect(advanceHandler1).toHaveBeenCalled();

      gameLoop.stop();
    });
  });

  describe('When it is started with speed 1000', () => {
    test('Then it should advance all the advanceables 3 times in 3000 milliseconds', done => {
      expect.assertions(2);

      const advanceHandler1: GameLoopHandler = jest.fn();
      const advanceHandler2: GameLoopHandler = jest.fn();
      const gameLoop = new GameLoop(1000);

      gameLoop.addAdvanceHandler(advanceHandler1);
      gameLoop.addAdvanceHandler(advanceHandler2);
      gameLoop.start();

      setTimeout(() => {
        expect(advanceHandler1).toHaveBeenCalledTimes(3);
        expect(advanceHandler2).toHaveBeenCalledTimes(3);
        done();
        gameLoop.stop();
      }, 3000);
    });
  });

  describe('When it is started and stopped after 500 milliseconds', () => {
    test('Then it should advance all the advanceables 1 time', done => {
      expect.assertions(1);
      const advanceHandler1: GameLoopHandler = jest.fn();

      const gameLoop = new GameLoop(1000);

      gameLoop.addAdvanceHandler(advanceHandler1);
      gameLoop.start();

      setTimeout(() => {
        gameLoop.stop();
        expect(advanceHandler1).toHaveBeenCalledTimes(1);
        done();
        gameLoop.stop();
      }, 500);
    });
  });

  describe('When it is started, the speed is changed to 500 after 1000 ms, and stopped after 2000ms', () => {
    test('Then it should advance all the advancables 4 times', done => {
      expect.assertions(1);
      const advanceHandler1: GameLoopHandler = jest.fn();

      const gameLoop = new GameLoop(1000);

      gameLoop.addAdvanceHandler(advanceHandler1);
      gameLoop.start();

      setTimeout(() => {
        gameLoop.changeSpeed(500);
      }, 1000);

      setTimeout(() => {
        gameLoop.stop();
        expect(advanceHandler1).toHaveBeenCalledTimes(4);
        done();
        gameLoop.stop();
      }, 2000);
    });
  });

  describe('When it is started and stopped after 1000ms', () => {
    test('Then the total running time should be 1000ms', done => {
      expect.assertions(1);

      const gameLoop = new GameLoop();

      gameLoop.start();

      setTimeout(() => {
        gameLoop.stop();
        expect(gameLoop.getTotalRunningTime()).toBe(1000);
        done();
      }, 1000);
    });
  });

  describe('When a reset handler, advance handler, collision handler and render handler are added, and the game loop is started', () => {
    test('Then they should be invoked in the order 1 advance handler, 2 collision handler, 3 render handler', done => {
      expect.assertions(7);

      const resetHandler: GameLoopHandler = jest.fn();
      const advanceHandler: GameLoopHandler = jest.fn();
      const collisionHandler: GameLoopHandler = jest.fn();
      const renderHandler: GameLoopHandler = jest.fn();

      const gameLoop = new GameLoop();

      gameLoop.addResetHandler(resetHandler);
      gameLoop.addAdvanceHandler(advanceHandler);
      gameLoop.addCollisionHandler(collisionHandler);
      gameLoop.addRenderHandler(renderHandler);

      gameLoop.start();

      const resetHandlerOrder = (resetHandler as jest.Mock).mock.invocationCallOrder[0];
      const advanceHandlerOrder = (advanceHandler as jest.Mock).mock.invocationCallOrder[0];
      const collisionHandlerOrder = (collisionHandler as jest.Mock).mock.invocationCallOrder[0];
      const renderHandlerOrder = (renderHandler as jest.Mock).mock.invocationCallOrder[0];

      setTimeout(() => {
        gameLoop.stop();
        expect(resetHandler).toHaveBeenCalled();
        expect(advanceHandler).toHaveBeenCalled();
        expect(collisionHandler).toHaveBeenCalled();
        expect(renderHandler).toHaveBeenCalled();
        expect(resetHandlerOrder).toBeLessThan(advanceHandlerOrder);
        expect(advanceHandlerOrder).toBeLessThan(collisionHandlerOrder);
        expect(collisionHandlerOrder).toBeLessThan(renderHandlerOrder);
        done();
      }, 1000);
    });
  });

  describe('When a reset handler, advance handler, collision handler and render handler are added and then removed', () => {
    test('Then they should not be invoked', done => {
      expect.assertions(4);

      const resetHandler: GameLoopHandler = jest.fn();
      const advanceHandler: GameLoopHandler = jest.fn();
      const collisionHandler: GameLoopHandler = jest.fn();
      const renderHandler: GameLoopHandler = jest.fn();

      const gameLoop = new GameLoop();

      const resetHandlerId = gameLoop.addResetHandler(resetHandler);
      const advanceHandlerId = gameLoop.addAdvanceHandler(advanceHandler);
      const collisionHandlerId = gameLoop.addCollisionHandler(collisionHandler);
      const renderHandlerId = gameLoop.addRenderHandler(renderHandler);

      gameLoop.removeResetHandler(resetHandlerId);
      gameLoop.removeAdvanceHandler(advanceHandlerId);
      gameLoop.removeCollisionHandler(collisionHandlerId);
      gameLoop.removeRenderHandler(renderHandlerId);

      gameLoop.start();

      setTimeout(() => {
        gameLoop.stop();
        expect(resetHandler).not.toHaveBeenCalled();
        expect(advanceHandler).not.toHaveBeenCalled();
        expect(collisionHandler).not.toHaveBeenCalled();
        expect(renderHandler).not.toHaveBeenCalled();
        done();
      }, 1000);
    });
  });
});
