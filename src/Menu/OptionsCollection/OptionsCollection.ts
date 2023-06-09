import { type Collection } from '../interfaces/Collection';

export class OptionsCollection<T> implements Collection<T> {
  #options: T[];

  constructor() {
    this.#options = [];
  }

  add(element: T): void {
    this.#options.push(element);
  }

  getList(): T[] {
    return this.#options;
  }
}