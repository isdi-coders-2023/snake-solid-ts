import { Board } from '../Board/Board';
import { defaultSnakeConfig } from '../constants';
import { MovementManager } from '../movement/MovementManager/MovementManager';
import { Direction } from '../types';
import { SnakeBody } from './Body';

describe('Given a Body', () => {
  describe('When it is created', () => {
    test('Then it should be an Object', () => {
      const body = new SnakeBody(defaultSnakeConfig);
      expect(typeof body).toBe('object');
    });

    describe('And it is passed length 4', () => {
      test('Then it should have 4 body segments', () => {
        const body = new SnakeBody(defaultSnakeConfig);
        expect(body.getLength()).toBe(4);
      });
    });

    describe('And it is passed length 2 coordinates (0, 0) and direction "right"', () => {
      test('Then it should have 2 body segments with coordinates (0, 0) and (-1, 0)', () => {
        const body = new SnakeBody({ ...defaultSnakeConfig, length: 2 });
        const firstSegment = body.getBodySegments()[0];
        const secondSegment = body.getBodySegments()[1];

        expect(firstSegment.getCoordinates()).toStrictEqual({ x: 0, y: 0 });
        expect(secondSegment.getCoordinates()).toStrictEqual({ x: -1, y: 0 });
      });
    });
    describe('And it is passed length 2 coordinates (0, 0) and direction "up"', () => {
      test('Then it should have 2 body segments with coordinates (0, 0) and (0, -1)', () => {
        const body = new SnakeBody({ ...defaultSnakeConfig, direction: Direction.UP, length: 2 });
        const firstSegment = body.getBodySegments()[0];
        const secondSegment = body.getBodySegments()[1];

        expect(firstSegment.getCoordinates()).toStrictEqual({ x: 0, y: 0 });
        expect(secondSegment.getCoordinates()).toStrictEqual({ x: 0, y: 1 });
      });
    });
    describe('And it is passed length 2 coordinates (0, 0) and direction "down"', () => {
      test('Then it should have 2 body segments with coordinates (0, 0) and (0, 1)', () => {
        const body = new SnakeBody({ ...defaultSnakeConfig, direction: Direction.DOWN, length: 2 });
        const firstSegment = body.getBodySegments()[0];
        const secondSegment = body.getBodySegments()[1];

        expect(firstSegment.getCoordinates()).toStrictEqual({ x: 0, y: 0 });
        expect(secondSegment.getCoordinates()).toStrictEqual({ x: 0, y: -1 });
      });
    });
    describe('And it is passed length 2 coordinates (0, 0) and direction "left"', () => {
      test('Then it should have 2 body segments with coordinates (0, 0) and (1, 0)', () => {
        const body = new SnakeBody({ ...defaultSnakeConfig, direction: Direction.LEFT, length: 2 });
        const firstSegment = body.getBodySegments()[0];
        const secondSegment = body.getBodySegments()[1];

        expect(firstSegment.getCoordinates()).toStrictEqual({ x: 0, y: 0 });
        expect(secondSegment.getCoordinates()).toStrictEqual({ x: 1, y: 0 });
      });
    });
    describe('When it executes a movement downwards with coordinates x=0,y=0', () => {
      test('Then it should have coordinates x=0,y=1', () => {
        const body = new SnakeBody({ ...defaultSnakeConfig, direction: Direction.DOWN, length: 2 });
        const board = new Board();
        const snakeMovementManager = new MovementManager(board);
        body.move(snakeMovementManager);
        const firstSegment = body.getBodySegments()[0];
        expect(firstSegment.getCoordinates()).toStrictEqual({ x: 0, y: 1 });
      });
    });
  });
  describe('When direction is changed to down', () => {
    test('Then its next move should be downwards', () => {
      const body = new SnakeBody(defaultSnakeConfig);
      const board = new Board();
      const snakeMovementManager = new MovementManager(board);
      body.changeDirection(Direction.DOWN);
      body.move(snakeMovementManager);
      expect(body.getBodySegments()[0].getCoordinates()).toEqual({ x: 0, y: 1 });
    });
  });
});
