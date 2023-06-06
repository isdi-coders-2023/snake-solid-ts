import { type Coordinates, type Drawable } from '../../ui/render-engine';
import { defaultBodySegmentColor } from '../constants.js';
import { type BodySegmentConfig } from '../types';

export class BodySegment implements Drawable {
  #color: string;
  #coordinates: Coordinates;

  constructor({ coordinates, color = defaultBodySegmentColor }: BodySegmentConfig) {
    this.#coordinates = coordinates;
    this.#color = color;
  }

  getColor(): string {
    return this.#color;
  }

  getCoordinates(): Coordinates {
    return this.#coordinates;
  }
}
