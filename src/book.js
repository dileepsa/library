const isEqual = (entity1, entity2) => {
  return entity2 instanceof Book &&
    entity1.name === entity2.name &&
    entity1.author === entity2.author &&
    entity1.genre === entity2.genre;
};

class Book {
  constructor(name, author, genre) {
    this.name = name;
    this.author = author;
    this.genre = genre;
  }

  belongsTo(genre) {
    return this.genre === genre;
  }

  equals(otherBook) {
    return isEqual(this, otherBook);
  }
}

exports.Book = Book;