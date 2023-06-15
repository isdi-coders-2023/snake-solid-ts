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
      expect(movementLeft.execute({ x: 1, y: 5 })).toEqual({ x: 0, y: 5 });
    });
  });
});
