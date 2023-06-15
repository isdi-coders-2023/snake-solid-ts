import { Direction } from '../../types';
import { MovementManager } from './MovementManager';

describe('Given a MovementManager', () => {
  describe('When it is createdt', () => {
    test('Then it should be an Object', () => {
      const movementManager = new MovementManager();
      expect(typeof movementManager).toBe('object');
    });
    test('And it should have direction ¨right¨', () => {
      const movementManager = new MovementManager();
      expect(movementManager.getDirection()).toBe(Direction.RIGHT);
    });
  });
  describe('When setDirection is called with "UP"', () => {
    test('Then its direction should change to "UP', () => {
      const movementManager = new MovementManager();
      movementManager.setDirection(Direction.UP);
      expect(movementManager.getDirection()).toBe(Direction.UP);
    });
  });
  describe('When setDirection is called with "LEFT"', () => {
    test('Then its direction should not change', () => {
      const movementManager = new MovementManager();
      movementManager.setDirection(Direction.LEFT);
      expect(movementManager.getDirection()).toBe(Direction.RIGHT);
    });
  });
  describe('When executes a movement with x=2,y=3 and direction is up', () => {
    test('Then it should return x=2,y=2', () => {
      const movementManager = new MovementManager();
      movementManager.setDirection(Direction.UP);
      expect(movementManager.move({ x: 2, y: 3 })).toEqual({ x: 2, y: 2 });
    });
  });
  describe('When executes a movement with x=2,y=3 and direction is down', () => {
    test('Then it should return x=2,y=4', () => {
      const movementManager = new MovementManager();
      movementManager.setDirection(Direction.DOWN);
      expect(movementManager.move({ x: 2, y: 3 })).toEqual({ x: 2, y: 4 });
    });
  });
  describe('When executes a movement with x=2,y=3 and direction is left', () => {
    test('Then it should return x=1,y=3', () => {
      const movementManager = new MovementManager();
      movementManager.setDirection(Direction.DOWN);
      movementManager.setDirection(Direction.LEFT);
      expect(movementManager.move({ x: 2, y: 3 })).toEqual({ x: 1, y: 3 });
    });
  });
  describe('When executes a movement with x=2,y=3 and direction is right', () => {
    test('Then it should return x=2,y=3', () => {
      const movementManager = new MovementManager();
      movementManager.setDirection(Direction.RIGHT);
      expect(movementManager.move({ x: 2, y: 3 })).toEqual({ x: 3, y: 3 });
    });
  });
});
