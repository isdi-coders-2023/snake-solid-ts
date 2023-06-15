import { type Coordinates } from '../../../ui/render-engine';

export class UpMovement {
  execute(coordinates: Coordinates) {
    return { ...coordinates, y: coordinates.y - 1 };
  }
}
