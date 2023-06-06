/* eslint-disable @typescript-eslint/naming-convention */
import { GameController } from '../../game/game-controller.js';
import { type Menu } from '../interfaces/Menu';
import { type ReadLineNodeMenu } from '../ReadLineNode/ReadLineNode';

export interface Option {
  value: string;
  label: string;
}

export type ObjectOption = Record<string, () => void>;

const options: Option[] = [
  // { value: '0', label: 'Invalid' },
  { value: '1', label: 'Play Now' },
  { value: '2', label: 'Exit' },
];

export class NodeMenu implements Menu {
  #userSelectedOption: Option | undefined;
  #readLineNode: ReadLineNodeMenu;

  constructor(readLineNode: ReadLineNodeMenu) {
    this.#userSelectedOption = { value: '0', label: 'Invalid' };
    this.#readLineNode = readLineNode;
  }

  showMenu(): void {
    this.#readLineNode.log('Select one option:');
    options.forEach((option, index) => {
      this.#readLineNode.log(`${index + 1}. ${option.label}`);
    });

    this.#readLineNode.question('Write the number of your choice: ', answer => {
      const userInputValue = parseInt(answer, 10);

      this.#userSelectedOption = options[userInputValue - 1];

      //  this.#userSelectedOption = options[userInputValue - 1];
      this.handleOption(this.#userSelectedOption);

      // this.handleOption(loQueSea);
    });
  }

  handleOption(selectedOption: Option): void {
    const objectOption: ObjectOption = {
      1: () => {
        this.handlePlayNow(); // abstraer
      },
      2: () => {
        this.handleExit(); // abstraer
      },
    };
    objectOption[selectedOption.value]();

    // objectOption[selectedOption.value]();

    // if (userSelectedOption) {
    //   // Call to Start method
    //   this.#readLineNode.log(`Your selection was: ${userSelectedOption.label}`);
    //   this.#readLineNode.close();
    // } else {
    //   this.#readLineNode.log('Invalid option, please re-enter an option');
    //   this.showMenu();
    // }
  }

  handlePlayNow(): void {
    console.log('handlePlayNow');
    if (!this.#userSelectedOption) {
      return;
    }

    this.#readLineNode.log(`Your selection was: ${this.#userSelectedOption?.label}`);
    // this.#readLineNode.close();
    // Call to Start method
    const game = new GameController();
    game.start();
  }

  handleExit(): void {
    this.#readLineNode.log('See you soon!');
    this.#readLineNode.close();
  }

  handleInvalidValue(): void {
    console.log('handleInvalidValue');
    this.#readLineNode.log('Invalid option, please re-enter an option');
    this.showMenu();
  }

  selectedOption(): void {
    throw new Error('Method not implemented.');
  }
}
