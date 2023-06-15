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
      expect(movementUp.execute({ x: 1, y: 5 })).toEqual({ x: 1, y: 4 });
    });
  });
});
