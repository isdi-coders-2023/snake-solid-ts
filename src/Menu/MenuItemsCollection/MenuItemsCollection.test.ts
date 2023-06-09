import NodeMenuItem from '../NodeMenuItem/NodeMenuItem';
import MenuItemsCollection from './MenuItemsCollection';

describe('Given a MenuItemsCollection', () => {
  describe('when it is defined', () => {
    test('then it should be a function', () => {
      expect(typeof MenuItemsCollection).toBe('function');
    });
  });

  describe('when getList method is invoked', () => {
    test('then it should return an empty array', () => {
      const menuOptions = new MenuItemsCollection();

      expect(menuOptions.getList()).toEqual([]);
    });
  });

  describe('when add method is invoked', () => {
    test('then it should add an element into menuItems array', () => {
      const menuOptions = new MenuItemsCollection();
      const option1 = new NodeMenuItem('start');
      menuOptions.add(option1);

      expect(menuOptions.getList()).toEqual([option1]);
    });
  });
});
