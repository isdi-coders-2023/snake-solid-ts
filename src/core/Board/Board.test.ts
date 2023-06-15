import { defaultBoardConfig } from '../constants';
import { type BoardConfig } from '../types';
import { Board } from './Board';

describe('Given a Board', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      expect(typeof new Board()).toBe('object');
    });
  });

  describe('When it is created with height 100 and width 100', () => {
    test('Then the boundaries for x and y should be minimum 0 and maximum 100', () => {
      const boardConfig: BoardConfig = { ...defaultBoardConfig, height: 100, width: 100 };
      const board = new Board(boardConfig);

      const boundaries = board.getBoundaries();

      expect(boundaries.minX).toBe(0);
      expect(boundaries.minY).toBe(0);
      expect(boundaries.maxX).toBe(100);
      expect(boundaries.maxY).toBe(100);
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
});
