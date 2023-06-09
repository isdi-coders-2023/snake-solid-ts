import { type Collection } from '../interfaces/Collection';
import { type MenuItem } from '../interfaces/MenuItem';

class MenuItemsCollection implements Collection<MenuItem> {
  #menuItems: MenuItem[];

  constructor() {
    this.#menuItems = [];
  }

  add(menuOption: MenuItem): void {
    this.#menuItems.push(menuOption);
  }

  getList(): MenuItem[] {
    return this.#menuItems;
  }
}

export default MenuItemsCollection;
