import Item from './Item';

describe('Given a Item Class', () => {
  describe('When its defined', () => {
    test('Then it should exists', () => {
      const item = new Item();

      expect(item).toBeDefined();
    });
  });

  describe('When its method getCoordinates is invoke', () => {
    test('Then it should return an object with property "x" and "y"', () => {
      const item = new Item();

      const coordinates = item.getCoordinates();

      expect(coordinates).toHaveProperty('x');
      expect(coordinates).toHaveProperty('y');
    });

    test('Then it should return a coordinate number between 0 and 100', () => {
      const expectedMaxRange = 100;
      const expectedMinRange = 0;
      const item = new Item();

      const coordinates = item.getCoordinates();

      expect(coordinates.x).toBeLessThanOrEqual(expectedMaxRange);
      expect(coordinates.y).toBeLessThanOrEqual(expectedMaxRange);
      expect(coordinates.x).toBeGreaterThanOrEqual(expectedMinRange);
      expect(coordinates.y).toBeGreaterThanOrEqual(expectedMinRange);
    });
  });
});
