import ReadLineMock from '../../__mocks__/ReadLineMock.js';

describe('Given a ReadLine', () => {
  describe('when it is defined', () => {
    test('then it should be a function', () => {
      expect(typeof ReadLineMock).toBe('function');
    });
  });

  describe('when question method is called', () => {
    test('then it should print a question', () => {
      const logSpy = jest.spyOn(global.console, 'log');
      const readline = new ReadLineMock();
      readline.question('Write the number of your choice: ', () => '1');

      expect(logSpy).toHaveBeenCalledWith('Write the number of your choice: ');
      logSpy.mockRestore();
    });
  });

  describe('when close method is called', () => {
    test('then it should close readline thread', () => {
      const readline = new ReadLineMock();
      readline.close();

      expect(readline.closed).toBeTruthy();
    });
  });
});
