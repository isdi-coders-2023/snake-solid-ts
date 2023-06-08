export type MenuItemAction = () => void;

export interface MenuItem {
  executeOption(): void;
  getName(): string;
  register(action: MenuItemAction): void;
}
