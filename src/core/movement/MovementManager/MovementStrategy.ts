import { type Coordinates } from '../../../ui/render-engine';

export interface MovementStrategy {
  execute(coordinates: Coordinates): Coordinates;
}
