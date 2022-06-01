class Book {
  #name;
  #author;
  #genre;
  constructor(name, author, genre) {
    this.#name = name;
    this.#author = author;
    this.#genre = genre;
  }

  belongsTo(genre) {
    return this.genre === genre;
  }

  equals(otherBook) {
    return otherBook instanceof Book &&
      this.#name === otherBook.#name &&
      this.#author === otherBook.#author &&
      this.#genre === otherBook.#genre;
  }
}

exports.Book = Book;
