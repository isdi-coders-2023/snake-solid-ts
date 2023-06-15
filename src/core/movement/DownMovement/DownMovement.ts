import { type Coordinates } from '../../../ui/render-engine';
import { type Board } from '../../Board/Board';

export class DownMovement {
  execute(coordinates: Coordinates, board: Board) {
    const boundaries = board.getBoundaries();
    if (coordinates.y === boundaries.maxY && boundaries.isInfinite) {
      return { ...coordinates, y: boundaries.minY };
    }

    return { ...coordinates, y: coordinates.y + 1 };
  }
}
