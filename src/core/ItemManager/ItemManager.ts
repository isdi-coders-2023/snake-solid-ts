import { type Board } from '../Board/Board.js';
import Item, { type ItemType } from '../Item/Item.js';
import type DrawableManager from './type';

class ItemManager implements DrawableManager {
  #generationItemTime: number;
  #drawableItems: Map<number, Item> = new Map<number, Item>();

  constructor(generationItemTime = 15000) {
    this.#generationItemTime = generationItemTime;
  }

  public generateItem(itemType: ItemType, gameLoopTime: number, board: Board): void {
    const timeLeft = this.#generationItemTime - gameLoopTime;

    if (timeLeft <= 0) {
      return;
    }

    this.#drawableItems.set(gameLoopTime, new Item(itemType, board));
  }

  public getItems(): Map<number, Item> {
    return this.#drawableItems;
  }
}
export default ItemManager;
