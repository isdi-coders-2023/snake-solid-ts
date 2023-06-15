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

  log(message: string): void {
    console.log(message);
  }

  close(): void {
    this.log('See you soon!');
    this.#readLine.close();
  }
}
