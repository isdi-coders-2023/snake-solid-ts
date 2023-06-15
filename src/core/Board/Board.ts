import { type Drawable } from '../../ui/render-engine.js';
import { Border } from '../Border/Border.js';
import { defaultBoardConfig, defaultBorderWidth } from '../constants.js';
import { type BoardBoundaries, type BoardConfig } from '../types';

export class Board {
  #isInfinite: boolean;
  #height: number;
  #width: number;
  #borders: Drawable[] = [];
  #borderWidth: number;

  constructor({
    isInfinite,
    height,
    width,
    borderWidth = defaultBorderWidth,
  }: BoardConfig = defaultBoardConfig) {
    this.#isInfinite = isInfinite;
    this.#height = height;
    this.#width = width;
    this.#borderWidth = borderWidth;

    this.#createBorder();
  }

  getBoundaries(): BoardBoundaries {
    return {
      minX: 0 + this.#borderWidth,
      minY: 0 + this.#borderWidth,
      maxX: this.#width + this.#borderWidth,
      maxY: this.#height + this.#borderWidth,
      isInfinite: this.#isInfinite,
    };
  }

  getBorders(): Drawable[] {
    if (this.#borderWidth === 0) {
      return [];
    }

    return this.#borders;
  }

  #createBorder(): void {
    const boundaries = this.getBoundaries();
    const { minX, minY, maxX, maxY } = boundaries;

    for (let x = minX; x <= maxX; x++) {
      this.#borders.push(new Border({ x, y: minY }));
      this.#borders.push(new Border({ x, y: maxY }));
    }

    for (let y = minY; y <= maxY; y++) {
      this.#borders.push(new Border({ x: minX, y }));
      this.#borders.push(new Border({ x: maxX, y }));
    }
  }
}
