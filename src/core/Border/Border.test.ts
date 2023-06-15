import { Border } from './Border.js';

describe('Given a Border', () => {
  describe('When it is created', () => {
    test('Then it should be an object', () => {
      expect(typeof new Border({ x: 0, y: 0 })).toBe('object');
    });
  });

  describe('When it is created with x 10 and y 10', () => {
    test('Then its coordinates should be x 10 and y 10', () => {
      const border = new Border({ x: 10, y: 10 });

      expect(border.getCoordinates()).toStrictEqual({ x: 10, y: 10 });
    });
  });

  describe('When it is created with color blue', () => {
    test('Then its color should be blue', () => {
      const border = new Border({ x: 0, y: 0 }, 'blue');

      expect(border.getColor()).toBe('blue');
    });
  });
});
