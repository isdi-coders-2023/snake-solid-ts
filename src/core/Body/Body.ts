import { type Coordinates, type Drawable } from '../../ui/render-engine';
import { BodySegment } from '../BodySegment/BodySegment.js';
import { Direction, type SnakeConfig } from '../types.js';

export class SnakeBody {
  #segments: Drawable[];
  #coordinates: Coordinates;
  #direction: Direction;

  constructor({ length, coordinates, direction }: SnakeConfig) {
    this.#direction = direction;
    this.#coordinates = coordinates;
    this.#segments = new Array(length).fill(null).map((_emptySegment, position) => {
      const coordinates = this.#calculateCoordinates(position);

      return new BodySegment({ coordinates });
    });
  }

  getLength() {
    return this.#segments.length;
  }

  getBodySegments() {
    return this.#segments;
  }

  #calculateCoordinates(position: number) {
    if (position === 0) {
      return this.#coordinates;
    }

    if (this.#direction === Direction.RIGHT) {
      return { x: this.#coordinates.x + position, y: this.#coordinates.y };
    }

    return this.#coordinates;
  }
}
