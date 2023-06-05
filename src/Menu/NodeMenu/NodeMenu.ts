import { type Menu } from '../interfaces/Menu';
import { type ReadLineNodeMenu } from '../ReadLineMenu/ReadLineMenu';

export interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: '1', label: 'Play Now' },
  { value: '2', label: 'Exit' },
];

export class NodeMenu implements Menu {
  #userSelectedOption: number;
  #readLineNode: ReadLineNodeMenu;

  constructor(readLineNode: ReadLineNodeMenu) {
    this.#userSelectedOption = 0;
    this.#readLineNode = readLineNode;
  }

  showMenu(): void {
    this.#readLineNode.log('Select one option:');
    options.forEach((option, index) => {
      this.#readLineNode.log(`${index + 1}. ${option.label}`);
    });

    this.#readLineNode.readLineMenu('Write the number of your choice: ', answer => {
      this.#userSelectedOption = parseInt(answer, 10);
      const selectedOption = options[this.#userSelectedOption - 1];

      if (selectedOption) {
        // Call to Start method
        this.#readLineNode.log(`Your selection was: ${selectedOption.label}`);
        this.#readLineNode.close();
      } else {
        this.#readLineNode.log('Invalid option, please re-enter an option');
        this.showMenu();
      }
    });
  }

  selectedOption(): void {
    throw new Error('Method not implemented.');
  }
}
