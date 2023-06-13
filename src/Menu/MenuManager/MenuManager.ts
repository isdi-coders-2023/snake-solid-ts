import { type ReadLineNodeMenu } from '../ReadLineNode/ReadLineNode';
import { type Collection } from '../interfaces/Collection';
import { type MenuItem } from '../interfaces/MenuItem';

export class MenuManager {
  #readLine: ReadLineNodeMenu;
  #menuItems: Collection<MenuItem>;

  constructor(readLine: ReadLineNodeMenu, menuItems: Collection<MenuItem>) {
    this.#readLine = readLine;
    this.#menuItems = menuItems;
  }

  handleOptionChoose(): void {
    this.#readLine.question('Write the number of your choice: ', answer => {
      this.checkAnswer(answer);
    });
  }

  checkAnswer(answer: string): void {
    const selectedMenuItem = this.#menuItems
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
