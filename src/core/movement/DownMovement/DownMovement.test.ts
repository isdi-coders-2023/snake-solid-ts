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
      expect(movementUp.execute({ x: 1, y: 5 })).toEqual({ x: 1, y: 6 });
    });
  });
});
