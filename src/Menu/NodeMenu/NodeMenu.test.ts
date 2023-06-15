import ReadLineMock from '../../__mocks__/ReadLineMock.js';
import MenuItemsCollection from '../MenuItemsCollection/MenuItemsCollection.js';
import NodeMenuItem from '../NodeMenuItem/NodeMenuItem';
import ReadLineNode from '../ReadLineNode/ReadLineNode';
import NodeMenu from './NodeMenu';
describe('Given a NodeMenu', () => {
  describe('when it is defined', () => {
    test('then it should be a function', () => {
      expect(typeof NodeMenu).toBe('function');
    });
  });

  describe('when showMenu method is called', () => {
    test('then it should print a message followed by menu options', () => {
      const logSpy = jest.spyOn(global.console, 'log');
      const readline = new ReadLineNode();
      const menuOptions = new MenuItemsCollection();
      const option1 = new NodeMenuItem('start', '1');
      menuOptions.add(option1);
      const nodeMenu = new NodeMenu(menuOptions, readline);
      nodeMenu.showMenu();
      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledTimes(2);
      expect(logSpy).toHaveBeenCalledWith('Select one option:');
      expect(logSpy).toHaveBeenCalledWith('1. start');
    });
  });

  describe('when handleOptionChoose method is called', () => {
    test('then it should print a message', () => {
      const logSpy = jest.spyOn(global.console, 'log');
      const functionToExecute = jest.fn();
      const readline = new ReadLineMock();
      const menuOptions = new MenuItemsCollection();
      const option1 = new NodeMenuItem('start', '1', functionToExecute);
      menuOptions.add(option1);
      const nodeMenu = new NodeMenu(menuOptions, readline);

      nodeMenu.handleOptionChoose();
      readline.simulateUserInput('1');

      expect(logSpy).toHaveBeenCalledWith('Write the number of your choice: ');
      expect(functionToExecute).toHaveBeenCalled();
    });
  });
});
