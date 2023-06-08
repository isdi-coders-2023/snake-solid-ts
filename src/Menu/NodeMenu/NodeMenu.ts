import { type OptionsCollection } from '../OptionsCollection/OptionsCollection';
import { type Menu } from '../interfaces/Menu';

// export interface Option {
//   value: string;
//   label: string;
// }

// export type ObjectOption = Record<string, () => void>;

// const options: Collection = [
//   // { value: '0', label: 'Invalid' },
//   { value: '1', label: 'Play Now' },
//   { value: '2', label: 'Exit' },
// ];

export class NodeMenu implements Menu {
  #options: OptionsCollection<string> | undefined;

  constructor() {
    this.#options = undefined;
  }

  showMenu(): void {
    console.log('Select one option:');
    const menuOptions = this.#options?.getList();
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
