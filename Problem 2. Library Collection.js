class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    if (this.books.length + 1 <= this.capacity) {
      this.books.push({ bookName, bookAuthor, payed: false });
      return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    } else {
      throw new Error("Not enough space in the collection.");
    }
  }
  payBook(bookName) {
    const target = this.books.find((el) => el.bookName === bookName);
    if (!target) {
      throw new Error(`${bookName} is not in the collection.`);
    } else {
      if (target.payed === true) {
        throw new Error(`${bookName} has already been paid.`);
      } else {
        target.payed = true;
        return `${bookName} has been successfully paid.`;
      }
    }
  }
  removeBook(bookName) {
    const target = this.books.find((el) => el.bookName === bookName);
    if (!target) {
      throw new Error("The book, you're looking for, is not found.");
    } else {
      if (target.payed === false) {
        throw new Error(
          `${bookName} need to be paid before removing from the collection.`
        );
      } else {
        let index = this.books.indexOf(bookName);
        this.books.splice(index, 1);
        return `${bookName} remove from the collection.`;
      }
    }
  }
  getStatistics(bookAuthor) {
    if (bookAuthor === undefined) {
      const emptySlots = this.capacity - this.books.length;
      this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
      let header = `The book collection has ${emptySlots} empty spots left.`;
      return (header += this.books
        .map(
          (a) =>
            `\n${a.bookName} == ${a.bookAuthor} - ${
              a.payed ? "Has Paid" : "Not Paid"
            }.`
        )
        .join(""));
    } else {
      const target = this.books.find((a) => a.bookAuthor === bookAuthor);
      if (!target) {
        throw new Error(`${bookAuthor} is not in the collection.`);
      } else {
        return `${target.bookName} == ${target.bookAuthor} - ${
          target.payed ? "Has Paid" : "Not Paid"
        }.`;
      }
    }
  }
}
const library = new LibraryCollection(5);
library.addBook("Don Quixote", "Miguel de Cervantes");
library.payBook("Don Quixote");
library.addBook("In Search of Lost Time", "Marcel Proust");
library.addBook("Ulysses", "James Joyce");
console.log(library.getStatistics("Miguel de Cervantes"));
