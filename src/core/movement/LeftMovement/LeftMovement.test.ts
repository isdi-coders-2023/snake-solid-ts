import { Board } from '../../Board/Board';
import { LeftMovement } from './LeftMovement';

describe('Given a LeftMovement', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      const movementLeft = new LeftMovement();
      expect(typeof movementLeft).toBe('object');
    });
  });
  describe('When it executes a movement from x=1, y=5', () => {
    test('Then it should return coordinates x=0, y=5', () => {
      const movementLeft = new LeftMovement();
      const board = new Board();
      expect(movementLeft.execute({ x: 1, y: 5 }, board)).toEqual({ x: 0, y: 5 });
    });
  });
  describe('When executes a movement beyond horizontal board limits and y=5', () => {
    test('Then it should return coordinates x=10, y=5', () => {
      const movementLeft = new LeftMovement();
      const board = new Board({ width: 10, height: 10, isInfinite: true });
      expect(movementLeft.execute({ x: 0, y: 5 }, board)).toEqual({ x: 10, y: 5 });
    });
  });
});
