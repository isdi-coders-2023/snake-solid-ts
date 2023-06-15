import Item, { ItemType } from '../Item/Item';
import ItemManager from './ItemManager';

describe('Given an ItemManager Class with a generationItemTime of 15 milliseconds', () => {
  const generationItemTime = 15;
  const gameLoopTime = 12;

  describe('When it is defined', () => {
    test('Then it should exist', () => {
      const itemManager = new ItemManager(generationItemTime);

      expect(itemManager).toBeDefined();
    });
  });

  describe('When its method generateItem is invoked with an ItemType food', () => {
    test('Then it should return an Item', () => {
      const itemManager = new ItemManager(generationItemTime);

      const generatedItem = itemManager.generateItem(ItemType.food, gameLoopTime);

      expect(generatedItem).toBeInstanceOf(Item);
    });
  });

  describe('When its method generateItem is invoked with type food and a gameLoopTime equal to generationTime', () => {
    test('Then it should return undefined', () => {
      const itemManager = new ItemManager(generationItemTime);
      const generatedItem = itemManager.generateItem(ItemType.food, generationItemTime);

      expect(generatedItem).toBeUndefined();
    });
  });
});
