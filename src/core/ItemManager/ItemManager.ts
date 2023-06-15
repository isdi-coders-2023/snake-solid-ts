import Item, { type ItemType } from '../Item/Item';

interface ItemManagement {
  generateItem(itemType: ItemType, gameLoopTime: number): Item | void;
}

class ItemManager implements ItemManagement {
  #generationItemTime: number;

  constructor(generationItemTime: number) {
    this.#generationItemTime = generationItemTime;
  }

  generateItem(itemType: ItemType, gameLoopTime: number): Item | void {
    const timeLeft = this.#generationItemTime - gameLoopTime;

    if (timeLeft <= 0) {
      return;
    }

    return new Item(itemType);
  }
}
export default ItemManager;
