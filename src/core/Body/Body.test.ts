import { defaultConfig } from '../constants';
import { Direction } from '../types';
import { SnakeBody } from './Body';

describe('Given a Body', () => {
  describe('When it is created', () => {
    test('Then it should be an Object', () => {
      const body = new SnakeBody(defaultConfig);
      expect(typeof body).toBe('object');
    });
    test('And it should have a length of 4', () => {
      const body = new SnakeBody(defaultConfig);
      expect(body.getLength()).toBe(4);
    });
    describe('With a configuration object with length 10', () => {
      test('Then it should have a length of 10', () => {
        const body = new SnakeBody({
          length: 10,
          coordinates: { x: 0, y: 0 },
          direction: Direction.RIGHT,
        });
        expect(body.getLength()).toBe(10);
      });
    });
  });
});
