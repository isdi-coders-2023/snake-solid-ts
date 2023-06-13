import { type Coordinates } from '../../../ui/render-engine';

export class DownMovement {
  execute(coordinates: Coordinates) {
    return { ...coordinates, y: coordinates.y + 1 };
  }
}
