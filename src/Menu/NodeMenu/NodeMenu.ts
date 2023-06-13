import { type Collection } from '../interfaces/Collection';
import { type Menu } from '../interfaces/Menu';
import { type MenuItem } from '../interfaces/MenuItem';

class NodeMenu implements Menu {
  #nodeMenuItems: Collection<MenuItem>;

  constructor(menuItems: Collection<MenuItem>) {
    this.#nodeMenuItems = menuItems;
  }

  showMenu(): void {
    console.log('Select one option:');
    const menuItemsList = this.#nodeMenuItems.getList();

    menuItemsList.forEach((option, index) => {
      console.log(`${index + 1}. ${option.getName()}`);
    });
  }
}

export default NodeMenu;
