import { type Coordinates, type Drawable } from '../../ui/render-engine';

export enum ItemType {
  food,
}

class Item implements Drawable {
  #coordinates: Coordinates;
  #itemType: ItemType;
  #colorItem: string;

  constructor(itemType: ItemType) {
    this.#coordinates = this.#generateCoordinates();
    this.#itemType = itemType;
    this.#colorItem = this.#generateItemColor();
  }

  public getColor(): string {
    return this.#colorItem;
  }

  public getCoordinates(): Coordinates {
    return this.#coordinates;
  }

  #getRandomInteger(maxNumber: number): number {
    return Math.floor(Math.random() * maxNumber);
  }

  #generateCoordinates() {
    const randomPositionX = this.#getRandomInteger(100);
    const randomPositionY = this.#getRandomInteger(100);

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
