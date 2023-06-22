import * as readline from 'readline';
import { type ReadLineNodeMenu } from '../interfaces/ReadLineNodeMenu';

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

  close(): void {
    this.#readLine.close();
  }
}
