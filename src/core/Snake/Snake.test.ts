import { Snake } from './Snake';

describe('Given a Snake', () => {
  describe('When it is created', () => {
    test('Then it should be an Object', () => {
      const snake = new Snake();
      expect(typeof snake).toBe('object');
    });

    test('And it should have a length of 4', () => {
      const snake = new Snake();
      expect(snake.getLength()).toBe(4);
    });

    describe('With a length of 10', () => {
      test('Then its length should be 10', () => {
        const snake = new Snake(10);
        expect(snake.getLength()).toBe(10);
      });
    });
  });
});
