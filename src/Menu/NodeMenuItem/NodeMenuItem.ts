import { type MenuItem, type MenuItemAction } from '../interfaces/MenuItem';

class NodeMenuItem implements MenuItem {
  #name: string;
  #action: MenuItemAction;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(name: string, action: MenuItemAction = () => {}) {
    this.#name = name;
    this.#action = action;
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
