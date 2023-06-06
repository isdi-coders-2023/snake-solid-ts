import { type Coordinates } from '../../ui/render-engine';
import { BodySegment } from './BodySegment';

describe('Given a BodySegment', () => {
  const coordinates: Coordinates = { x: 0, y: 0 };

  describe('When it is created with coordinates (0, 0) and without a color', () => {
    test('Then it should be an object', () => {
      const segment = new BodySegment({ coordinates });
      expect(typeof segment).toBe('object');
    });

    test('And then it should have coordinates (0, 0)', () => {
      const segment = new BodySegment({ coordinates });

      expect(segment.getCoordinates()).toStrictEqual({ x: 0, y: 0 });
    });

    test('And then it should have color white', () => {
      const segment = new BodySegment({ coordinates });

      expect(segment.getColor()).toBe('white');
    });
  });
});
