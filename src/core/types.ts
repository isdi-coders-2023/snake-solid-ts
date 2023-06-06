import { type Coordinates } from '../ui/render-engine';

export enum Direction {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

export type SnakeConfig = {
  length: number;
  coordinates: Coordinates;
  direction: Direction;
};
