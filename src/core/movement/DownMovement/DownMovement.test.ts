import { Board } from '../../Board/Board';
import { type BoardConfig } from '../../types';
import { DownMovement } from './DownMovement';

describe('Given a DownMovement', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      const movementUp = new DownMovement();
      expect(typeof movementUp).toBe('object');
    });
  });
  describe('When it executes a movement from x=1, y=5', () => {
    test('Then it should return coordinates x=1, y=6', () => {
      const movementUp = new DownMovement();
      const board = new Board();
      expect(movementUp.execute({ x: 1, y: 5 }, board)).toEqual({ x: 1, y: 6 });
    });
  });
  describe('When executes a movement beyond vertical board limits and x=5', () => {
    test('Then it should return coordinates x=5, y=1', () => {
      const movementDown = new DownMovement();
      const borderWidth = 1;
      const boardConfig: BoardConfig = { width: 10, height: 10, isInfinite: true, borderWidth };
      const board = new Board(boardConfig);
      expect(movementDown.execute({ x: 5, y: boardConfig.width + borderWidth }, board)).toEqual({
        x: 5,
        y: borderWidth,
      });
    });
  });
});
