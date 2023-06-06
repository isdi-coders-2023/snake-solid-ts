import { type Collisionable } from '../../ui/render-engine';
import { type EngineCollision } from './types';

export class EngineCollisionManager implements EngineCollision {
  checkCollision(firstCollisionable: Collisionable, secondCollisionable: Collisionable): boolean {
    const firstCollisionableCoordinates = firstCollisionable.getCoordinates();
    const secondCollisionableCoordinates = secondCollisionable.getCoordinates();

    if (
      // eslint-disable-next-line operator-linebreak
      firstCollisionableCoordinates.x === secondCollisionableCoordinates.x &&
      firstCollisionableCoordinates.y === secondCollisionableCoordinates.y
    ) {
      return true;
    }

    return false;
  }
}
