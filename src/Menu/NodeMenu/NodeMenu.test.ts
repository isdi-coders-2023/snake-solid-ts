import MenuItemsCollection from '../MenuItemsCollection/MenuItemsCollection';
import NodeMenuItem from '../NodeMenuItem/NodeMenuItem';
import NodeMenu from './NodeMenu';

describe('Given a NodeMenu', () => {
  describe('when it is defined', () => {
    test('then it should be a function', () => {
      expect(typeof NodeMenu).toBe('function');
    });
  });

  describe('when showMenu method is called', () => {
    test('then it should print the menu items collection', () => {
      const menuOptions = new MenuItemsCollection();
      const option1 = new NodeMenuItem('start');
      menuOptions.add(option1);
      const nodeMenu = new NodeMenu(menuOptions);
      nodeMenu.showMenu();
    });
  });
});
