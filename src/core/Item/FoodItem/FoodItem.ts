import ItemAbstract from '../ItemAbstract';

class FoodItem extends ItemAbstract {
  #color = 'red';

  getColor(): string {
    return this.#color;
  }
}

export default FoodItem;
