import * as readline from 'readline';

export interface ReadLineNodeMenu {
  question(question: string, callback: (answer: string) => void): void;
  log(message: string): void;
  close(): void;
}

export default class ReadLineNode implements ReadLineNodeMenu {
  #readLine: readline.Interface;

  constructor() {
    this.#readLine = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  question(question: string, callback: (answer: string) => void): void {
    this.#readLine.question(question, callback);
  }

  log(message: string): void {
    console.log(message);
  }

  close(): void {
    this.#readLine.close();
  }
}
