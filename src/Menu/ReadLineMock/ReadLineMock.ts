import { type ReadLineNodeMenu } from '../ReadLineNode/ReadLineNode';

class ReadLineMock implements ReadLineNodeMenu {
  readLineCallback: ((answer: string) => void) | undefined = undefined;
  logMessages: string[] = [];
  closed = false;

  question(question: string, callback: (answer: string) => void): void {
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

export default ReadLineMock;
