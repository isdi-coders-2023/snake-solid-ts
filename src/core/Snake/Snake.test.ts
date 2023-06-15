import { defaultSnakeConfig } from '../constants';
import { Direction } from '../types';
import { Snake } from './Snake';

describe('Given a Snake', () => {
  describe('When it is created', () => {
    test('Then it should be an Object', () => {
      const snake = new Snake();
      expect(typeof snake).toBe('object');
    });

    test('And it should have a length of 4', () => {
      const snake = new Snake();
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

    describe('And it is passed length 2 coordinates (0, 0) and direction "right"', () => {
      test('Then it should have 2 body segments with coordinates (0, 0) and (-1, 0)', () => {
        const snake = new Snake({ ...defaultSnakeConfig, length: 2 });
        const snakeBody = snake.getBody();
        const firstSegment = snakeBody[0];
        const secondSegment = snakeBody[1];

        expect(firstSegment.getCoordinates()).toStrictEqual({ x: 0, y: 0 });
        expect(secondSegment.getCoordinates()).toStrictEqual({ x: -1, y: 0 });
      });
    });
    describe('And it advances from (0, 0) and direction "right"', () => {
      test('Then its head should have coordinates (1, 0)', () => {
        const snake = new Snake({ ...defaultSnakeConfig, length: 4 });
        const snakeBody = snake.getBody();

        snake.advance();

        const firstSegment = snakeBody[0];
        expect(firstSegment.getCoordinates()).toStrictEqual({ x: 1, y: 0 });
      });
    });
  });
});
