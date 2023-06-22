import { type Board } from '../Board/Board.js';
import FoodItem from '../Item/FoodItem/FoodItem.js';
import type Item from '../Item/Item.js';
import type DrawableManager from './type';

class ItemManager implements DrawableManager {
  #generationItemTime: number;
  #drawableItems: Map<number, Item> = new Map<number, Item>();

  constructor(generationItemTime = 15000) {
    this.#generationItemTime = generationItemTime;
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

  public generateItem(gameLoopTime: number, board: Board): void {
    const newCoordinates = this.#generateCoordinates(board);
    const timeLeft = this.#generationItemTime - gameLoopTime;

    if (timeLeft <= 0) {
      return;
    }

    this.#drawableItems.set(gameLoopTime, new FoodItem(newCoordinates, 20));
  }

  public getItems(): Map<number, Item> {
    return this.#drawableItems;
  }

  public delete(index: number): void {
    this.#drawableItems.delete(index);
  }
}
export default ItemManager;
