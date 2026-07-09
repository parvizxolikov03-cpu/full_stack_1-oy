// 3. book objectida isbn property yarating va
// uni:
// ○ writable: false
// ○ configurable: false
// qilib belgilang.

const books = (book) => {
  return Object.defineProperty(book, "name", {
    writable: false,
    configuratable: false,
  });
};

const book = {
  name: "isbn",
};

console.log(books(book));
