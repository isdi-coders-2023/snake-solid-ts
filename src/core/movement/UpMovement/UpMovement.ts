import { type Coordinates } from '../../../ui/render-engine';
import { type Board } from '../../Board/Board';

export class UpMovement {
  execute(coordinates: Coordinates, board: Board) {
    const boundaries = board.getBoundaries();
    if (coordinates.y === boundaries.minY && boundaries.isInfinite) {
      return { ...coordinates, y: boundaries.maxY };
    }

    return { ...coordinates, y: coordinates.y - 1 };
  }
}
