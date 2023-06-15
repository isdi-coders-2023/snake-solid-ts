import { defaultBoardConfig } from '../constants.js';
import { type BoardBoundaries, type BoardConfig } from '../types';

export class Board {
  #isInfinite: boolean;
  #height: number;
  #width: number;

  constructor({ isInfinite, height, width }: BoardConfig = defaultBoardConfig) {
    this.#isInfinite = isInfinite;
    this.#height = height;
    this.#width = width;
  }

  getBoundaries(): BoardBoundaries {
    return {
      minX: 0,
      minY: 0,
      maxX: this.#width,
      maxY: this.#height,
      isInfinite: this.#isInfinite,
    };
  }
}
