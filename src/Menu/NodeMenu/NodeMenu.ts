import { type Logger } from 'winston';
import { type Collection } from '../interfaces/Collection';
import { type Menu } from '../interfaces/Menu';
import { type MenuItem } from '../interfaces/MenuItem';
import { type ReadLineNodeMenu } from '../interfaces/ReadLineNodeMenu';

class NodeMenu implements Menu {
  #nodeMenuItems: Collection<MenuItem>;
  #readLine: ReadLineNodeMenu;
  #logger: Logger;

  constructor(menuItems: Collection<MenuItem>, readLine: ReadLineNodeMenu, logger: Logger) {
    this.#nodeMenuItems = menuItems;
    this.#readLine = readLine;
    this.#logger = logger;
  }

  showMenu(): void {
    this.#logger.info('Select one option:');
    const menuItemsList = this.#nodeMenuItems.getList();

    menuItemsList.forEach((option, index) => {
      this.#logger.info(`${index + 1}. ${option.getName()}`);
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
      this.#logger.info('This is an invalid option');
      this.handleOptionChoose();
    }

    if (selectedMenuItem) {
      this.#readLine.close();
      selectedMenuItem.executeOption();
    }
  }
}

export default NodeMenu;
