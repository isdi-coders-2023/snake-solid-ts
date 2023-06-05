import { NodeMenu } from './NodeMenu';

describe('Given a NodeMenu', () => {
  describe('when it is defined', () => {
    test('then it should be a function', () => {
      const nodeMenu = new NodeMenu();

      expect(nodeMenu).toBeDefined();
    });
  });

  describe('when showMenu is called', () => {
    test('then it should print the menu options collection', () => {
      const nodeMenu = new NodeMenu();
      expect(nodeMenu.showMenu()).toBe('Start, Exit');
    });
  });
});
