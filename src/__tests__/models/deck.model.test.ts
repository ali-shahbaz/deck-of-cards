import {suite, test} from 'mocha';
import {assert} from 'sinon';
import {Deck} from '../../models';

// TDD
describe('Test Deck of Cards model', () => {
  const model = new Deck();
  suite('deck of cards', () => {
    test('should return 52 non-shuffled cards', () => {
      assert.match(52, model.createCardsDeck(false, false).length);
    });

    test('should retrun 36 shuffled cards', () => {
      assert.match(36, model.createCardsDeck(true, true).length);
    });
  });
});
