import { type Coordinates } from '../../../ui/render-engine';
import FoodItem from '../FoodItem/FoodItem';

describe('Given a FoodItem class', () => {
  const lifespan = 15000;

  describe('When its defined', () => {
    test('Then it should exists', () => {
      const food = new FoodItem(undefined as unknown as Coordinates, 0);

      expect(food).toBeDefined();
    });
  });

  describe('When it receives a coordinates "x: 0" and" "y: 0", and its method getCoordinates is invoked', () => {
    test('Then it should return an object with property x with value 0 and property y with value 0', () => {
      const mockCoordinates: Coordinates = { x: 0, y: 0 };
      const foodItem = new FoodItem(mockCoordinates, lifespan);

      const foodItemCoordinates = foodItem.getCoordinates();

      expect(foodItemCoordinates).toHaveProperty('x', mockCoordinates.x);
      expect(foodItemCoordinates).toHaveProperty('y', mockCoordinates.x);
    });
  });

  describe('When its method getColor is invoked', () => {
    test('Then it should return "red"', () => {
      const expectedFoodItemColor = 'red';
      const foodItem = new FoodItem(undefined as unknown as Coordinates, 0);

      const foodItemColor = foodItem.getColor();

      expect(foodItemColor).toBe(expectedFoodItemColor);
    });
  });

  describe('When it receives a lifespan of 0 and its method isDead is invoked', () => {
    test('Then it should be dead', () => {
      const expectedIsDead = true;
      const foodItem = new FoodItem(undefined as unknown as Coordinates, 0);

      const isFoodItemDead = foodItem.isDead();

      expect(isFoodItemDead).toBe(expectedIsDead);
    });
  });

  describe('When it receives a lifespan of 1500 and its method isDead is invoked', () => {
    test('Then it should not be dead', () => {
      const expectedIsDead = false;
      const foodItem = new FoodItem(undefined as unknown as Coordinates, lifespan);

      const isFoodItemDead = foodItem.isDead();

      expect(isFoodItemDead).toBe(expectedIsDead);
    });
  });
});
