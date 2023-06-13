import NodeMenuItem from '../NodeMenuItem/NodeMenuItem';
import { OptionsCollection } from '../OptionsCollection/OptionsCollection.js';
import { type MenuItem } from '../interfaces/MenuItem';
import NodeMenu from './NodeMenu';

describe('Given a NodeMenu', () => {
  describe('when it is defined', () => {
    test('then it should be a function', () => {
      expect(typeof NodeMenu).toBe('function');
    });
  });

  describe('when showMenu method is called', () => {
    test('then it should print the menu items collection', () => {
      const menuOptions = new OptionsCollection<MenuItem>();
      const option1 = new NodeMenuItem('start', '1');
      menuOptions.add(option1);
      const nodeMenu = new NodeMenu(menuOptions);
      nodeMenu.showMenu();
    });
  });
});
