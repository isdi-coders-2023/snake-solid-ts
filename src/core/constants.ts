import { Direction, type BoardConfig } from './types.js';

export const defaultSnakeConfig = {
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
