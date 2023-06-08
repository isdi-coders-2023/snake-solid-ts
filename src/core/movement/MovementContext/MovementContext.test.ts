import { Direction } from '../../types';
import { MovementContext } from './MovementContext';

describe('Given a MovementContext', () => {
  describe('When it is createdt', () => {
    test('Then it should be an Object', () => {
      const movementContext = new MovementContext();
      expect(typeof movementContext).toBe('object');
    });
    test('And it should have direction ¨right¨', () => {
      const movementContext = new MovementContext();
      expect(movementContext.getDirection()).toBe(Direction.RIGHT);
    });
  });
  describe('When setDirection is called with "UP"', () => {
    test('Then its direction should change to "UP', () => {
      const movementContext = new MovementContext();
      movementContext.setDirection(Direction.UP);
      expect(movementContext.getDirection()).toBe(Direction.UP);
    });
  });
});
