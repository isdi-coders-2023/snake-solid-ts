import { type Coordinates, type Drawable } from '../../ui/render-engine';
import { type Board } from '../Board/Board';

export enum ItemType {
  food,
}

class Item implements Drawable {
  #coordinates: Coordinates;
  #itemType: ItemType;
  #colorItem: string;
  #board: Board;

  constructor(itemType: ItemType, snakeBoard: Board) {
    this.#itemType = itemType;
    this.#colorItem = this.#generateItemColor();
    this.#board = snakeBoard;
    this.#coordinates = this.#generateCoordinates();
  }

  public getColor(): string {
    return this.#colorItem;
  }

  public getCoordinates(): Coordinates {
    return this.#coordinates;
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

  #generateItemColor(): string {
    const itemColor = {
      [this.#itemType]: 'red',
    };

    return itemColor[this.#itemType];
  }
}

export default Item;
