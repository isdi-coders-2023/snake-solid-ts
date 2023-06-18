import { type Board } from '../Board/Board';
import type Item from '../Item/Item';
import { type ItemType } from '../Item/Item';

interface DrawableManager {
  generateItem(itemType: ItemType, gameLoopTime: number, board: Board): void;
  getItems(): Map<number, Item>;
}

export default DrawableManager;
