import { type ReadLineNodeMenu } from '../ReadLineMenu/ReadLineMenu';
import { NodeMenu } from './NodeMenu';

class ReadLineMock implements ReadLineNodeMenu {
  readLineCallback: ((answer: string) => void) | undefined = undefined;
  logMessages: string[] = [];
  closed = false;

  readLineMenu(question: string, callback: (answer: string) => void): void {
    console.log(question);
    this.readLineCallback = callback;
  }

  log(message: string): void {
    this.logMessages.push(message);
  }

  close(): void {
    this.closed = true;
  }

  getLogMessages(): string[] {
    return this.logMessages;
  }

  simulateUserInput(answer: string): void {
    if (this.readLineCallback) {
      this.readLineCallback(answer);
    }
  }
}
const readlineMock = new ReadLineMock();

describe('Given a NodeMenu', () => {
  describe('when it is defined', () => {
    test('then it should be a function', () => {
      const nodeMenu = new NodeMenu(readlineMock);

      expect(nodeMenu).toBeDefined();
    });
  });

  describe('when showMenu is called', () => {
    test('then it should print the menu options collection', () => {
      const nodeMenu = new NodeMenu(readlineMock);
      const logsOptions = ['Select one option:', '1. Play Now', '2. Exit'];
      nodeMenu.showMenu();

      expect(readlineMock.getLogMessages()).toEqual(expect.arrayContaining(logsOptions));
    });
  });
  describe('when showMenu is called and enter an invalid option', () => {
    test('then it should handle it to display again the menu', () => {
      const nodeMenu = new NodeMenu(readlineMock);
      nodeMenu.showMenu();
      readlineMock.simulateUserInput('3');
      expect(readlineMock.getLogMessages()).toContain('Invalid option, please re-enter an option');
    });
  });
});
