import type MenuItemsCollection from '../MenuItemsCollection/MenuItemsCollection';
import { type Menu } from '../interfaces/Menu';

class NodeMenu implements Menu {
  #nodeMenuItems: MenuItemsCollection;

  constructor(menuItems: MenuItemsCollection) {
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
