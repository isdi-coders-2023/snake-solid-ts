import { RightMovement } from './RightMovement';

describe('Given an RightMovement', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      const movementRight = new RightMovement();
      expect(typeof movementRight).toBe('object');
    });
  });
  describe('When it executes a movement from x=1, y=5', () => {
    test('Then it should return coordinates x=2, y=5', () => {
      const movementRight = new RightMovement();
      expect(movementRight.execute({ x: 1, y: 5 })).toEqual({ x: 2, y: 5 });
    });
  });
});
