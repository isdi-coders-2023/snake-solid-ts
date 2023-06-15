import { Board } from '../../Board/Board';
import { type BoardConfig } from '../../types';
import { LeftMovement } from './LeftMovement';

describe('Given a LeftMovement', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      const movementLeft = new LeftMovement();
      expect(typeof movementLeft).toBe('object');
    });
  });
  describe('When it executes a movement from x=2, y=5', () => {
    test('Then it should return coordinates x=1, y=5', () => {
      const movementLeft = new LeftMovement();
      const board = new Board();
      expect(movementLeft.execute({ x: 2, y: 5 }, board)).toEqual({ x: 1, y: 5 });
    });
  });
  describe('When executes a movement beyond horizontal board limits and y=5', () => {
    test('Then it should return coordinates x=11,  =y=5', () => {
      const movementLeft = new LeftMovement();
      const borderWidth = 1;
      const boardConfig: BoardConfig = { width: 10, height: 10, isInfinite: true, borderWidth };
      const board = new Board(boardConfig);
      expect(movementLeft.execute({ x: borderWidth, y: 5 }, board)).toEqual({
        x: boardConfig.width + borderWidth,
        y: 5,
      });
    });
  });
});
