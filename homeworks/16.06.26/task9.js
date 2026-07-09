// 9. Kutubxona
// LibraryBook class yarating. title va #isBorrowed. borrow(), returnBook().
// static totalBooks.

class Library {
  #isBorrowed = true;
  constructor(title, isBorrowed) {
    this.title = title;
    this.#isBorrowed = isBorrowed;
  }
  borrow() {
    return (this.#isBorrowed = !this.#isBorrowed);
  }
  returnBook() {
    return [this.title, this.#isBorrowed];
  }
}

const library = new Library("SOS");
console.log(library.borrow());
console.log(library.returnBook());
