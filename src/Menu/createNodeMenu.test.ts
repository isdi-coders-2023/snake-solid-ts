import createNodeMenu from './createNodeMenu';

describe('Given a createNodeMenu function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('when it is defined', () => {
    test('then it should be a function', () => {
      expect(typeof createNodeMenu).toBe('function');
    });
  });
  describe('when showMenu method is called', () => {
    test('then it should print a message followed by menu options', () => {
      const logSpy = jest.spyOn(global.console, 'log');
      const nodeMenu = createNodeMenu();
      nodeMenu.showMenu();
      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledWith('Select one option:');
      expect(logSpy).toHaveBeenCalledWith('1. start');
      expect(logSpy).toHaveBeenCalledWith('2. exit');
    });
  });
  describe('when handleOptionChoose method is called', () => {
    test('then it should print a message', () => {
      const logSpy = jest.spyOn(global.console, 'log');
      const nodeMenu = createNodeMenu();
      nodeMenu.showMenu();
      nodeMenu.handleOptionChoose();
      expect(logSpy).toHaveBeenCalled();
    });
  });
});
