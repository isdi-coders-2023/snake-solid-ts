import winston from 'winston';
import ReadLineMock from '../../__mocks__/ReadLineMock.js';
import MenuItemsCollection from '../MenuItemsCollection/MenuItemsCollection.js';
import NodeMenuItem from '../NodeMenuItem/NodeMenuItem';
import ReadLineNode from '../ReadLineNode/ReadLineNode';
import NodeMenu from './NodeMenu';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.printf(log => log.message as string),
    }),
  ],
});

describe('Given a NodeMenu', () => {
  describe('when it is defined', () => {
    test('then it should be a function', () => {
      expect(typeof NodeMenu).toBe('function');
    });
  });

  describe('when showMenu method is called', () => {
    test('then it should print a message followed by menu options', () => {
      const spyLogger = jest.spyOn(logger, 'info');
      const readline = new ReadLineNode();
      const menuOptions = new MenuItemsCollection();
      const option1 = new NodeMenuItem('start', '1');
      menuOptions.add(option1);
      const nodeMenu = new NodeMenu(menuOptions, readline, logger);
      nodeMenu.showMenu();
      expect(spyLogger).toHaveBeenCalled();
      expect(spyLogger).toHaveBeenCalledTimes(2);
      expect(spyLogger).toHaveBeenCalledWith('Select one option:');
      expect(spyLogger).toHaveBeenCalledWith('1. start');
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
      const nodeMenu = new NodeMenu(menuOptions, readline, logger);

      nodeMenu.handleOptionChoose();
      readline.simulateUserInput('1');

      expect(logSpy).toHaveBeenCalledWith('Write the number of your choice: ');
      expect(functionToExecute).toHaveBeenCalled();
    });
  });
});
