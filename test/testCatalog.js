const assert = require('assert');
const { Catalog } = require('../src/catalog.js');
const { Book } = require('../src/book.js');

describe.only('Catalog', () => {
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
});
