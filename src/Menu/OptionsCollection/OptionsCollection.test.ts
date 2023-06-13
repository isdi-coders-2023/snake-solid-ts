import NodeMenuItem from '../NodeMenuItem/NodeMenuItem';
import { OptionsCollection } from './OptionsCollection';

describe('Given an OptionsCOllection', () => {
  describe('when it is invoked', () => {
    test('then it should be a function', () => {
      expect(typeof OptionsCollection).toBe('function');
    });
  });

  describe('when getList method is invoked', () => {
    test('then it should return an empty array', () => {
      const options = new OptionsCollection();
      expect(options.getList()).toEqual([]);
    });
  });

  describe('when add method is invoked', () => {
    test('then it should add an element into options array', () => {
      const options = new OptionsCollection();
      const option1 = new NodeMenuItem('start', '1');
      options.add(option1.getName());
      expect(options.getList()).toEqual(['start']);
    });
  });
});
