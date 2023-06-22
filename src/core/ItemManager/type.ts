import { type Board } from '../Board/Board';
import type Item from '../Item/Item';

interface DrawableManager {
  delete(number: number): void;
  generateItem(gameLoopTime: number, board: Board): void;
  getItems(): Map<number, Item>;
}

export default DrawableManager;
