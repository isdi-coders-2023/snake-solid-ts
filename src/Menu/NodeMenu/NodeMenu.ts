import { type Collection } from '../interfaces/Collection';
import { type Menu } from '../interfaces/Menu';
import { type MenuItem } from '../interfaces/MenuItem';
import { type ReadLineNodeMenu } from '../interfaces/ReadLineNodeMenu';

class NodeMenu implements Menu {
  #nodeMenuItems: Collection<MenuItem>;
  #readLine: ReadLineNodeMenu;

  constructor(menuItems: Collection<MenuItem>, readLine: ReadLineNodeMenu) {
    this.#nodeMenuItems = menuItems;
    this.#readLine = readLine;
  }

  showMenu(): void {
    console.log('Select one option:');
    const menuItemsList = this.#nodeMenuItems.getList();

    menuItemsList.forEach((option, index) => {
      console.log(`${index + 1}. ${option.getName()}`);
    });
  }

  handleOptionChoose(): void {
    this.#readLine.question('Write the number of your choice: ', answer => {
      this.#checkAnswer(answer);
    });
  }

  #checkAnswer(answer: string): void {
    const selectedMenuItem = this.#nodeMenuItems
      .getList()
      .find((menuItem: MenuItem) => menuItem.getValue() === answer);

    if (!selectedMenuItem) {
      console.log('This is an invalid option');
      this.handleOptionChoose();
    }

    if (selectedMenuItem) {
      selectedMenuItem.executeOption();
    }
  }
}

export default NodeMenu;
