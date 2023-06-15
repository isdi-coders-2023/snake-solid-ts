import { type Coordinates } from '../../../ui/render-engine';
import { type Board } from '../../Board/Board';

export class LeftMovement {
  execute(coordinates: Coordinates, board: Board) {
    const boundaries = board.getBoundaries();
    if (coordinates.x === boundaries.minX && boundaries.isInfinite) {
      return { ...coordinates, x: boundaries.maxX };
    }

    return { ...coordinates, x: coordinates.x - 1 };
  }
}
