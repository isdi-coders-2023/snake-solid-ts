import { type Coordinates, type Drawable } from '../../ui/render-engine';

export enum ItemType {
  food,
}

class Item implements Drawable {
  #coordinates: Coordinates;
  #itemType: ItemType;
  #colorItem: string;
  // #board: Board;

  constructor(itemType: ItemType, coordinates: Coordinates) {
    this.#itemType = itemType;
    this.#coordinates = coordinates;
    this.#colorItem = this.#generateItemColor();
    // this.#board = snakeBoard;
    // this.#coordinates = this.#generateCoordinates();
  }

  public getColor(): string {
    return this.#colorItem;
  }

  public getCoordinates(): Coordinates {
    return this.#coordinates;
  }

  #generateItemColor(): string {
    const itemColor = {
      [this.#itemType]: 'red',
    };

    return itemColor[this.#itemType];
  }
}

export default Item;
