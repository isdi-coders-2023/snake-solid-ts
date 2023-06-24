import FoodItem from '../core/Item/FoodItem/FoodItem';
import type Item from '../core/Item/Item';
import type DrawableManager from '../core/ItemManager/type';
import { type Coordinates } from '../ui/render-engine';

class ItemManagerMock implements DrawableManager {
  #drawableItems = new Map<number, Item>();
  #coordinates: Coordinates;
  #itemLifespan = 15000;

  constructor(coordinates: Coordinates) {
    this.#coordinates = coordinates;
  }

  getItems(): Map<number, Item> {
    return this.#drawableItems;
  }

  delete(index: number): void {
    this.#drawableItems.delete(index);
  }

  createItemOnGenerationInterval(gameLoopTime: number): void {
    const newItem = new FoodItem(this.#coordinates, this.#itemLifespan);

    this.#drawableItems.set(gameLoopTime, newItem);
  }
}

export default ItemManagerMock;
