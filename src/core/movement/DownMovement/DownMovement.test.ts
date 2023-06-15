import { Board } from '../../Board/Board';
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
    test('Then it should return coordinates x=5, y=0', () => {
      const movementDown = new DownMovement();
      const board = new Board({ width: 10, height: 10, isInfinite: true });
      expect(movementDown.execute({ x: 5, y: 10 }, board)).toEqual({ x: 5, y: 0 });
    });
  });
});
