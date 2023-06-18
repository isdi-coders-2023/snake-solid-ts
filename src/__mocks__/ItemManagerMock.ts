import { type Board } from '../core/Board/Board';
import Item, { type ItemType } from '../core/Item/Item';
import type DrawableManager from '../core/ItemManager/type';

class ItemManagerMock implements DrawableManager {
  #drawableItems = new Map<number, Item>();

  getItems(): Map<number, Item> {
    return this.#drawableItems;
  }

  generateItem(itemType: ItemType, gameLoopTime: number, board: Board): void {
    const newItem = new Item(itemType, board);

    this.#drawableItems.set(gameLoopTime, newItem);
  }
}

export default ItemManagerMock;
