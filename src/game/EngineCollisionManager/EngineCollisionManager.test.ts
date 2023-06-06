import { CollisionableMock } from '../../__mocks__/CollisionableMock';
import { type Collisionable } from '../../ui/render-engine';
import { EngineCollisionManager } from './EngineCollisionManager';

describe('Given a EngineCollisionManager class', () => {
  const coordinates = { x: 2, y: 3 };
  describe('When it is defined', () => {
    test('Then it should exist', () => {
      const engineCollisionManager = new EngineCollisionManager();

      expect(engineCollisionManager).toBeDefined();
    });
  });
  describe('When its method checkCollision is invoked with two Collisionables both with position x:2 and y:3', () => {
    describe('Then it should return true', () => {
      const engineCollisionManager = new EngineCollisionManager();
      const firstCollisionable: Collisionable = new CollisionableMock(coordinates);
      const secondCollisionable: Collisionable = new CollisionableMock(coordinates);

      expect(engineCollisionManager.checkCollision(firstCollisionable, secondCollisionable)).toBe(
        true,
      );
    });
  });
  describe('When its method checkCollision is invoked with a Collisionable with position x:2 and y:3 and another one with position x:5 and y:9', () => {
    describe('Then it should return false', () => {
      const engineCollisionManager = new EngineCollisionManager();
      const firstCollisionable: Collisionable = new CollisionableMock(coordinates);
      const secondCollisionable: Collisionable = new CollisionableMock({ x: 5, y: 9 });

      expect(engineCollisionManager.checkCollision(firstCollisionable, secondCollisionable)).toBe(
        false,
      );
    });
  });
});
