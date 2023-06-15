import { Board } from '../../Board/Board';
import { type BoardConfig } from '../../types';
import { UpMovement } from './UpMovement';

describe('Given an UpMovement', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      const movementUp = new UpMovement();
      expect(typeof movementUp).toBe('object');
    });
  });
  describe('When it executes a movement from x=1, y=5', () => {
    test('Then it should return coordinates x=1, y=4', () => {
      const movementUp = new UpMovement();
      const board = new Board();
      expect(movementUp.execute({ x: 1, y: 5 }, board)).toEqual({ x: 1, y: 4 });
    });
  });
  describe('When executes a movement beyond vertical board limits and x=5', () => {
    test('Then it should return coordinates x=5, y=11', () => {
      const movementUp = new UpMovement();
      const borderWidth = 1;
      const boardConfig: BoardConfig = { width: 10, height: 10, isInfinite: true, borderWidth };
      const board = new Board(boardConfig);
      expect(movementUp.execute({ x: 5, y: borderWidth }, board)).toEqual({
        x: 5,
        y: borderWidth + boardConfig.height,
      });
    });
  });
});
