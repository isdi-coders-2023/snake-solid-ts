import Item, { type ItemType } from '../Item/Item';

interface ItemManagement {
  generateItem(itemType: ItemType, gameLoopTime: number): Item | undefined;
}

class ItemManager implements ItemManagement {
  #generationItemTime: number;

  constructor(generationItemTime: number) {
    this.#generationItemTime = generationItemTime;
  }

  generateItem(itemType: ItemType, gameLoopTime: number): Item | undefined {
    const timeLeft = this.#generationItemTime - gameLoopTime;

    if (timeLeft !== 0) {
      return undefined;
    }

    return new Item(itemType);
  }
}
export default ItemManager;
