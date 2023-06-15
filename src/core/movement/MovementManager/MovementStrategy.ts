import { type Coordinates } from '../../../ui/render-engine';
import { type Board } from '../../Board/Board';

export interface MovementStrategy {
  execute(coordinates: Coordinates, board: Board): Coordinates;
}
