import { Board } from '../Board/Board';
import Item, { ItemType } from './Item';

const board = new Board();
const coordinates = board.getBoundaries();

describe('Given a Item Class', () => {
  describe('When its defined', () => {
    test('Then it should exists', () => {
      const item = new Item(undefined as unknown as ItemType);

      expect(item).toBeDefined();
    });
  });

  describe('When its method getCoordinates is invoke', () => {
    test('Then it should return an object with property "x" and "y"', () => {
      const item = new Item(undefined as unknown as ItemType);

      const coordinates = item.getCoordinates();

      expect(coordinates).toHaveProperty('x');
      expect(coordinates).toHaveProperty('y');
    });

    test('Then it should return a coordinate number between 0 and 100', () => {
      const expectedMaxRange = 100;
      const expectedMinRange = 0;
      const item = new Item(undefined as unknown as ItemType, board);

      const coordinates = item.getCoordinates();

      expect(coordinates.x).toBeLessThanOrEqual(expectedMaxRange);
      expect(coordinates.y).toBeLessThanOrEqual(expectedMaxRange);
      expect(coordinates.x).toBeGreaterThanOrEqual(expectedMinRange);
      expect(coordinates.y).toBeGreaterThanOrEqual(expectedMinRange);
    });
  });

  describe('When its method getColor is invoke and is an item type food', () => {
    test('Then it should return the color "red"', () => {
      const expectedColor = 'red';
      const itemType = ItemType.food;
      const foodItem = new Item(itemType, board);

      const foodColor = foodItem.getColor();

      expect(foodColor).toBe(expectedColor);
    });
  });
});
