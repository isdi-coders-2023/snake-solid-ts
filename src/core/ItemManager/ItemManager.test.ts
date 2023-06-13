import Item, { ItemType } from '../Item/Item';
import ItemManager from './ItemManager';

describe('Given an ItemManager Class with a generationItemTime of 15 seconds', () => {
  const generationItemTime = 15;

  describe('When it is defined', () => {
    test('Then it should exist', () => {
      const itemManager = new ItemManager(generationItemTime);

      expect(itemManager).toBeDefined();
    });
  });

  describe('When its method generateItem is invoked with an ItemType food', () => {
    test('Then it should return an Item', () => {
      const itemManager = new ItemManager(generationItemTime);

      const generatedItem = itemManager.generateItem(ItemType.food, 15);

      expect(generatedItem).toBeInstanceOf(Item);
    });
  });
});
