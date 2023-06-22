import NodeMenu from './NodeMenu/NodeMenu';
import createNodeMenu from './createNodeMenu';

describe('Given a createNodeMenu function', () => {
  describe('when it is defined', () => {
    test('then it should be a function', () => {
      expect(typeof createNodeMenu).toBe('function');
    });
  });

  describe('when it is called', () => {
    test('then it return an instance of NodeMenu class', () => {
      const nodeMenu = createNodeMenu();

      expect(nodeMenu).toBeInstanceOf(NodeMenu);
    });
  });
});
