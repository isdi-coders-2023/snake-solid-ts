import { type MenuItem, type MenuItemAction } from '../interfaces/MenuItem';

class NodeMenuItem implements MenuItem {
  #name: string;
  #action: MenuItemAction;
  #value: string;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(name: string, value: string, action: MenuItemAction = () => {}) {
    this.#name = name;
    this.#action = action;
    this.#value = value;
  }

  getValue(): string {
    return this.#value;
  }

  action(): () => void {
    return this.#action;
  }

  getName(): string {
    return this.#name;
  }

  register(action: () => void): void {
    this.#action = action;
  }

  executeOption(): void {
    this.#action();
  }
}

export default NodeMenuItem;
