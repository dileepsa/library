const { Book } = require('../src/Book.js');
const assert = require('assert');

describe('Book', () => {
  it('Should equate two entities of Book class', () => {
    const book1 = new Book('Road to mussoire', 'Ruskin Bond', 'Biography');
    const book2 = new Book('Road to mussoire', 'Ruskin Bond', 'Biography');
    assert.ok(book1.equals(book2));
  });

  it('Should equate two entities that does not belong to class', () => {
    const book1 = new Book('Road to mussoire', 'Ruskin Bond', 'Biography');
    const book2 = {
      name: 'Road to mussoire',
      author: 'Ruskin Bond',
      genre: 'Biography'
    };
    assert.ok(!book1.equals(book2));
  });
  describe('belongsTo', () => {
    it('Should return true for the genre biography', () => {
      const book1 = new Book('Road to mussoire', 'Ruskin Bond', 'Biography');
      const actual = book1.belongsTo('Biography');
      assert.strictEqual(actual, true);
    });
  });
});
