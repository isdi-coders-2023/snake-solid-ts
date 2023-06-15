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

export type BodySegmentConfig = {
  color?: string;
  coordinates: Coordinates;
};

export type BoardConfig = {
  isInfinite: boolean;
  height: number;
  width: number;
  borderWidth?: number;
};

export type BoardBoundaries = {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  isInfinite: boolean;
};
