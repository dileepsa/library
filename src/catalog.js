class Catalog {
  #books;
  constructor(books) {
    this.#books = books;
  }

  booksOf(genre) {
    return this.#books.filter((book) => book.belongsTo(genre));
  }

  equals(otherCatalog) {
    return otherCatalog instanceof Catalog &&
      otherCatalog.#books.every((book, index) => {
        return book.equals(this.#books[index]);
      });
  }
}

exports.Catalog = Catalog;
