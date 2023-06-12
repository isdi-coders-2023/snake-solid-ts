import { Collection } from '../interfaces/Collection';
import { type Menu } from '../interfaces/Menu';

export class NodeMenu implements Menu {
  #options: Collection<string> | undefined;

  constructor(optionsCollection: Collection<string>) {
    this.#options = optionsCollection;
  }

  showMenu(): void {
    console.log('Select one option:');
    const menuOptions = this.#options?.getOptions();
    menuOptions?.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });

    // Manager class
  }

  // this.#readLineNode.question('Write the number of your choice: ', answer => {
  //     const userInputValue = parseInt(answer, 10);
  //     // 3
  //     this.#userSelectedOption = options[userInputValue - 1];

  //     //  this.#userSelectedOption = options[userInputValue - 1];
  //   });

  // handleExit(): void {
  //   this.#readLineNode.log('See you soon!');
  //   this.#readLineNode.close();
  // }

  // handleInvalidValue(): void {
  //   console.log('handleInvalidValue');
  //   this.#readLineNode.log('Invalid option, please re-enter an option');
  //   this.showMenu();
  // }
}
