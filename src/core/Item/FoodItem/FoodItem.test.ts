import { type Coordinates } from '../../../ui/render-engine';
import FoodItem from '../FoodItem/FoodItem';

describe('Given a FoodItem class', () => {
  describe('When its defined', () => {
    test('Then it should exists', () => {
      const food = new FoodItem(undefined as unknown as Coordinates);

      expect(food).toBeDefined();
    });
  });

  describe('When it receives a coordinates "x: 0" and" "y: 0", and its method getCoordinates is invoked', () => {
    test('Then it should return an object with property x with value 0 and property y with value 0', () => {
      const mockCoordinates: Coordinates = { x: 0, y: 0 };
      const foodItem = new FoodItem(mockCoordinates);

      const foodItemCoordinates = foodItem.getCoordinates();

      expect(foodItemCoordinates).toHaveProperty('x', mockCoordinates.x);
      expect(foodItemCoordinates).toHaveProperty('y', mockCoordinates.x);
    });
  });

  describe('When its method getColor is invoked', () => {
    test('Then it should return "red"', () => {
      const expectedFoodItemColor = 'red';
      const foodItem = new FoodItem(undefined as unknown as Coordinates);

      const foodItemColor = foodItem.getColor();

      expect(foodItemColor).toBe(expectedFoodItemColor);
    });
  });
});
