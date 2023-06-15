import type Item from '../Item/Item';
import { type ItemType } from '../Item/Item';

interface ItemManagement {
  generateItem(itemType: ItemType, gameLoopTime: number): Item | void;
}

export default ItemManagement;
