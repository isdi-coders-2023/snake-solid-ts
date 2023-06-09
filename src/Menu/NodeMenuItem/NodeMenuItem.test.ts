import NodeMenuItem from './NodeMenuItem';

describe('Given a NodeMenuItem', () => {
  describe('when it is defined', () => {
    test('then it should be a function', () => {
      expect(typeof NodeMenuItem).toBe('function');
    });
  });

  describe('when it receives a name', () => {
    test('then it should have a name property', () => {
      const name = 'start';
      const value = '1';
      const myNodeMenuItem = new NodeMenuItem(name, value);

      expect(myNodeMenuItem.getName()).toBe('start');
    });
  });

  describe('when register method is invoked', () => {
    test('then a callback function should be registered', () => {
      const name = 'start';
      const value = '1';
      const customFunction = jest.fn();
      const myNodeMenuItem = new NodeMenuItem(name, value);
      myNodeMenuItem.register(customFunction);

      expect(myNodeMenuItem.action()).toEqual(customFunction);
    });
  });

  describe('when executeOption method is invoked', () => {
    test('then a callback function should be called', () => {
      const name = 'start';
      const value = '1';
      const customFunction = jest.fn();
      const myNodeMenuItem = new NodeMenuItem(name, value);
      myNodeMenuItem.register(customFunction);
      myNodeMenuItem.executeOption();

      expect(customFunction).toHaveBeenCalled();
    });
  });
});
