import Item, { type ItemType } from '../core/Item/Item';
import type ItemManagement from '../core/ItemManager/type';

class ItemManagerMock implements ItemManagement {
  generateItem(itemType: ItemType): void | Item {
    return new Item(itemType);
  }
}

export default ItemManagerMock;
