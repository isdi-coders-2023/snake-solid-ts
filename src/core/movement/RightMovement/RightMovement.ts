import { type Coordinates } from '../../../ui/render-engine';
import { type Board } from '../../Board/Board';

export class RightMovement {
  execute(coordinates: Coordinates, board: Board) {
    const boundaries = board.getBoundaries();
    if (coordinates.x === boundaries.maxX && boundaries.isInfinite) {
      return { ...coordinates, x: boundaries.minX };
    }

    return { ...coordinates, x: coordinates.x + 1 };
  }
}
