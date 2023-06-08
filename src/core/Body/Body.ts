import { type Coordinates, type Drawable } from '../../ui/render-engine';
import { BodySegment } from '../BodySegment/BodySegment.js';
import { Direction, type SnakeConfig } from '../types.js';

export class SnakeBody {
  #segments: Drawable[];
  #coordinates: Coordinates;
  #direction: Direction;
  #coordinatesMap: Map<Direction, (position: number) => Coordinates>;

  constructor({ length, coordinates, direction }: SnakeConfig) {
    this.#direction = direction;
    this.#coordinates = coordinates;
    this.#coordinatesMap = new Map();
    this.#createDirectionToCoordinateMap();
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

  #createDirectionToCoordinateMap() {
    this.#coordinatesMap.set(Direction.UP, (position: number) => ({
      x: this.#coordinates.x,
      y: this.#coordinates.y + position,
    }));
    this.#coordinatesMap.set(Direction.DOWN, (position: number) => ({
      x: this.#coordinates.x,
      y: this.#coordinates.y - position,
    }));
    this.#coordinatesMap.set(Direction.LEFT, (position: number) => ({
      x: this.#coordinates.x + position,
      y: this.#coordinates.y,
    }));
    this.#coordinatesMap.set(Direction.RIGHT, (position: number) => ({
      x: this.#coordinates.x - position,
      y: this.#coordinates.y,
    }));
  }

  #calculateCoordinates(position: number) {
    if (position === 0) {
      return this.#coordinates;
    }

    return this.#coordinatesMap.get(this.#direction)!(position);
  }
}
