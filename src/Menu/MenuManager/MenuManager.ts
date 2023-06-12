import { type ReadLineNodeMenu } from '../ReadLineNode/ReadLineNode';
import { type MenuItem } from '../interfaces/MenuItem';

export class MenuManager {
  #readLine: ReadLineNodeMenu;
  #actionToExecute: MenuItem;
  //   #game: Game;
  constructor(readLine: ReadLineNodeMenu, action: MenuItem) {
    this.#readLine = readLine;
    this.#actionToExecute = action;
  }

  handleOptionChoose(): void {
    this.#readLine.question('Write the number of your choice: ', answer => {
      const userInputValue = parseInt(answer, 10);
      // 3
      console.log(userInputValue);
      if (userInputValue === 1) {
        this.#actionToExecute.executeOption();
      }

      if (userInputValue === 2) {
        this.#readLine.close();
      }
    });
  }
}
