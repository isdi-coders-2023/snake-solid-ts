import { type Board } from '../Board/Board.js';
import Item, { type ItemType } from '../Item/Item.js';
import type DrawableManager from './type';

class ItemManager implements DrawableManager {
  #generationItemTime: number;
  #drawableItems: Map<number, Item> = new Map<number, Item>();
  #board: Board;

  constructor(board: Board, generationItemTime = 15000) {
    this.#generationItemTime = generationItemTime;
    this.#board = board;
  }

  #getRandomInteger(maxNumber: number, minNumber: number): number {
    const randomInteger = Math.floor(Math.random() * maxNumber);

    if (randomInteger < minNumber) {
      return minNumber;
    }

    return randomInteger;
  }

  #generateCoordinates() {
    const { maxX, minX, minY, maxY } = this.#board.getBoundaries();
    const randomPositionX = this.#getRandomInteger(maxX, minX);
    const randomPositionY = this.#getRandomInteger(maxY, minY);

    return {
      x: randomPositionX,
      y: randomPositionY,
    };
  }

  public generateItem(itemType: ItemType, gameLoopTime: number): void {
    const newCoordinates = this.#generateCoordinates();
    const timeLeft = this.#generationItemTime - gameLoopTime;

    if (timeLeft <= 0) {
      return;
    }

    this.#drawableItems.set(gameLoopTime, new Item(itemType, newCoordinates));
  }

  public getItems(): Map<number, Item> {
    return this.#drawableItems;
  }
}
export default ItemManager;
