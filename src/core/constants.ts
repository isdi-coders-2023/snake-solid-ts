import { Direction, type BoardConfig, type SnakeConfig } from './types.js';

export const defaultSnakeConfig: SnakeConfig = {
  length: 4,
  direction: Direction.RIGHT,
  coordinates: { x: 0, y: 0 },
};

export const defaultBodySegmentColor = 'white';

export const defaultGameSpeed = 200;

export const defaultBoardConfig: BoardConfig = {
  isInfinite: true,
  height: 100,
  width: 100,
};
