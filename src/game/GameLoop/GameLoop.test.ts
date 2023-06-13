import { GameLoop } from './GameLoop';
import { type AdvanceHandler } from './types';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Given a GameLoop', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      expect(typeof new GameLoop()).toBe('object');
    });
  });

  describe('When it is started', () => {
    test('Then it should advance all the advanceables', () => {
      const gameLoop = new GameLoop();

      const advanceHandler1: AdvanceHandler = jest.fn();
      const advanceHandler2: AdvanceHandler = jest.fn();

      gameLoop.addAdvanceHandler(advanceHandler1);
      gameLoop.addAdvanceHandler(advanceHandler2);
      gameLoop.start();

      expect(advanceHandler1).toHaveBeenCalled();
      expect(advanceHandler1).toHaveBeenCalled();
    });
  });

  describe('When it is started with speed 1000', () => {
    test('Then it should advance all the advanceables 3 times in 3000 milliseconds', done => {
      expect.assertions(2);

      const advanceHandler1: AdvanceHandler = jest.fn();
      const advanceHandler2: AdvanceHandler = jest.fn();
      const gameLoop = new GameLoop(1000);

      gameLoop.addAdvanceHandler(advanceHandler1);
      gameLoop.addAdvanceHandler(advanceHandler2);
      gameLoop.start();

      setTimeout(() => {
        expect(advanceHandler1).toHaveBeenCalledTimes(3);
        expect(advanceHandler2).toHaveBeenCalledTimes(3);
        done();
      }, 3000);
    });
  });

  describe('When it is started and stopped after 500 milliseconds', () => {
    test('Then it should advance all the advanceables 1 time', done => {
      expect.assertions(1);
      const advanceHandler1: AdvanceHandler = jest.fn();

      const gameLoop = new GameLoop(1000);

      gameLoop.addAdvanceHandler(advanceHandler1);
      gameLoop.start();

      setTimeout(() => {
        gameLoop.stop();
        expect(advanceHandler1).toHaveBeenCalledTimes(1);
        done();
      }, 500);
    });
  });

  describe('When it is started, the speed is changed to 500 after 1000 ms, and stopped after 2000ms', () => {
    test('Then it should advance all the advancables 4 times', done => {
      expect.assertions(1);
      const advanceHandler1: AdvanceHandler = jest.fn();

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
      }, 2000);
    });
  });
});
