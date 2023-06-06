import { defaultConfig } from '../constants';
import { Direction } from '../types';
import { Snake } from './Snake';

describe('Given a Snake', () => {
  describe('When it is created', () => {
    test('Then it should be an Object', () => {
      const snake = new Snake(defaultConfig);
      expect(typeof snake).toBe('object');
    });

    test('And it should have a length of 4', () => {
      const snake = new Snake(defaultConfig);
      expect(snake.getLength()).toBe(4);
    });

    describe('With a length of 10', () => {
      test('Then its length should be 10', () => {
        const snake = new Snake({
          length: 10,
          direction: Direction.RIGHT,
          coordinates: { x: 0, y: 0 },
        });
        expect(snake.getLength()).toBe(10);
      });
    });
    describe('With initial coordinates of x=5 and y=3', () => {
      test('Then its length should be 10', () => {
        const snake = new Snake({
          length: 10,
          direction: Direction.RIGHT,
          coordinates: { x: 5, y: 3 },
        });
        expect(snake.getLength()).toBe(10);
      });
    });
  });
});
