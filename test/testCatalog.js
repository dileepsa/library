const assert = require('assert');
const { Catalog } = require('../src/catalog.js');
const { Book } = require('../src/book.js');

describe('Catalog', () => {
  it('Should validate books of same class', () => {
    const wingsOfFire = new Book('wings of fire', 'APJ Kalam', 'autobiography');
    const catalog1 = new Catalog([wingsOfFire]);
    const catalog2 = new Catalog([wingsOfFire]);
    assert.ok(catalog1.equals(catalog2));
  });

  it('Should validate books that doesnt belongs to same class', () => {
    const wingsOfFire = new Book('wings of fire', 'APJ Kalam', 'autobiography');
    const catalog1 = new Catalog([wingsOfFire]);
    assert.ok(!catalog1.equals([{ name: 'wings of fire' }]));
  });

  describe('booksOf', () => {
    it('Should return one book of autobiography', () => {
      const wingsOfFire = new Book('wings of fire', 'APJ Kalam', 'autobiography');
      const catalog = new Catalog([wingsOfFire]);
      const expected = [{ name: 'wings of fire', author: 'APJ Kalam', genre: 'autobiography' }];
      const actual = catalog.booksOf('autobiography');
      assert.strict(actual, expected);
    });
  });
});
