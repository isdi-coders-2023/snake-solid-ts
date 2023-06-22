import Item from '../Item.js';

class FoodItem extends Item {
  #color = 'red';

  getColor(): string {
    return this.#color;
  }
}

export default FoodItem;
