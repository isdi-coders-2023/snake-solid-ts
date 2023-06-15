import { defaultBoardConfig } from '../constants';
import { type BoardConfig } from '../types';
import { Board } from './Board';

describe('Given a Board', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      expect(typeof new Board()).toBe('object');
    });
  });

  describe('When it is created with height 100 and width 100 and borderWidth 1', () => {
    test('Then the boundaries for x and y should be minimum 0 and maximum 100', () => {
      const boardConfig: BoardConfig = {
        ...defaultBoardConfig,
        height: 100,
        width: 100,
        borderWidth: 1,
      };
      const board = new Board(boardConfig);

      const boundaries = board.getBoundaries();

      expect(boundaries.minX).toBe(1);
      expect(boundaries.minY).toBe(1);
      expect(boundaries.maxX).toBe(101);
      expect(boundaries.maxY).toBe(101);
    });
  });

  describe('When it is created and it\'s not infinite', () => {
    test('Then the boundaries should not be infinite', () => {
      const boardConfig: BoardConfig = { ...defaultBoardConfig, isInfinite: false };
      const board = new Board(boardConfig);

      const boundaries = board.getBoundaries();

      expect(boundaries.isInfinite).toBe(false);
    });
  });

  describe('When it is created with height 2 and width 2', () => {
    test('Then it should have 8 borders', () => {
      const boardConfig: BoardConfig = { ...defaultBoardConfig, height: 2, width: 2 };
      const board = new Board(boardConfig);

      const borders = board.getBorders();

      expect(borders.length).toBe(12);
    });
  });

  describe('When it is created with borderWidth 0', () => {
    test('Then it should have no borders', () => {
      const boardConfig: BoardConfig = { ...defaultBoardConfig, borderWidth: 0 };
      const board = new Board(boardConfig);

      const borders = board.getBorders();

      expect(borders.length).toBe(0);
    });
  });
});
