import { type Collisionable } from '../../ui/render-engine';

export interface EngineCollision {
  checkCollision(firstCollisionable: Collisionable, secondCollisionable: Collisionable): boolean;
}
