import Item, { type ItemType } from '../core/Item/Item';
import type DrawableManager from '../core/ItemManager/type';
import { type Coordinates } from '../ui/render-engine';

class ItemManagerMock implements DrawableManager {
  #drawableItems = new Map<number, Item>();
  #coordinates: Coordinates;

  constructor(coordinates: Coordinates) {
    this.#coordinates = coordinates;
  }

  getItems(): Map<number, Item> {
    return this.#drawableItems;
  }

  delete(index: number): void {
    this.#drawableItems.delete(index);
  }

  generateItem(itemType: ItemType, gameLoopTime: number): void {
    const newItem = new Item(itemType, this.#coordinates);

    this.#drawableItems.set(gameLoopTime, newItem);
  }
}

export default ItemManagerMock;
