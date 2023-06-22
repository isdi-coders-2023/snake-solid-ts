import { Board } from '../Board/Board';
import Item from '../Item/Item';
import { defaultBoardConfig } from '../constants';
import { type BoardConfig } from '../types';
import ItemManager from './ItemManager';

describe('Given an ItemManager Class with a generationItemTime of 15 milliseconds', () => {
  const boardConfig: BoardConfig = {
    ...defaultBoardConfig,
    height: 10,
    width: 10,
    borderWidth: 1,
  };
  const generationItemTime = 15;
  const gameLoopTime = 12;
  const board = new Board(boardConfig);

  describe('When it is defined', () => {
    test('Then it should exist', () => {
      const itemManager = new ItemManager();

      expect(itemManager).toBeDefined();
    });
  });

  describe('When its method generateItem is invoked with an ItemType food, a gameLoopTime of 12 and a board', () => {
    test('Then it should instanciated an Item', () => {
      const itemManager = new ItemManager(generationItemTime);

      itemManager.generateItem(gameLoopTime, board);
      const items = itemManager.getItems();

      expect(items.get(gameLoopTime)).toBeInstanceOf(Item);
    });
  });

  describe('When its method generateItem is invoked with an ItemType food, a gameLoopTime of 15 and a board', () => {
    test('Then it should not instanciated any Item', () => {
      const loopTimeGame = 15;
      const itemManager = new ItemManager(generationItemTime);

      itemManager.generateItem(loopTimeGame, board);
      const items = itemManager.getItems();

      expect(items.size).toBe(0);
    });
  });

  describe('When its method delete is invoked with an item index', () => {
    test('Then it should delete this item', () => {
      const itemManager = new ItemManager(generationItemTime);

      itemManager.generateItem(gameLoopTime, board);

      const items = itemManager.getItems();

      for (const [number] of itemManager.getItems()) {
        itemManager.delete(number);
      }

      expect(items.size).toBe(0);
    });
  });
});
