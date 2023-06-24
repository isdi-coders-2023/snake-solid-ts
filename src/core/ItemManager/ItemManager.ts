import { type Board } from '../Board/Board.js';
import FoodItem from '../Item/FoodItem/FoodItem.js';
import type Item from '../Item/Item.js';
import type DrawableManager from './type';

class ItemManager implements DrawableManager {
  #generationItemTime: number;
  #itemLifespan: number;
  #drawableItems: Map<number, Item> = new Map<number, Item>();
  #timeLastGeneratedItem: number;

  constructor(generationItemTime = 15000, itemLifespan = 20000) {
    this.#generationItemTime = generationItemTime;
    this.#itemLifespan = itemLifespan;
    this.#timeLastGeneratedItem = Date.now();
  }

  #getRandomInteger(maxNumber: number, minNumber: number): number {
    const differenceMaxMin = maxNumber - minNumber;
    const randomNumberTimesDifferenceMaxMin = Math.random() * differenceMaxMin;
    const randomInteger = Math.floor(randomNumberTimesDifferenceMaxMin + minNumber);

    return randomInteger;
  }

  #generateCoordinates(board: Board) {
    const { maxX, maxY, minX, minY } = board.getBoundaries();
    const randomPositionX = this.#getRandomInteger(maxX, minX);
    const randomPositionY = this.#getRandomInteger(maxY, minY);

    return {
      x: randomPositionX,
      y: randomPositionY,
    };
  }

  public createItemOnGenerationInterval(gameLoopTime: number, board: Board): void {
    const newCoordinates = this.#generateCoordinates(board);
    const timeNow = Date.now();
    const timePass = timeNow - this.#timeLastGeneratedItem;

    if (timePass >= this.#generationItemTime) {
      this.#drawableItems.set(gameLoopTime, new FoodItem(newCoordinates, this.#itemLifespan));
      this.#timeLastGeneratedItem = timeNow;
    }
  }

  public getItems(): Map<number, Item> {
    return this.#drawableItems;
  }

  public delete(index: number): void {
    this.#drawableItems.delete(index);
  }
}
export default ItemManager;
