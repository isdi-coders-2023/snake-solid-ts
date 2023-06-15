import { type Coordinates } from '../../../ui/render-engine';

export class LeftMovement {
  execute(coordinates: Coordinates) {
    return { ...coordinates, x: coordinates.x - 1 };
  }
}
