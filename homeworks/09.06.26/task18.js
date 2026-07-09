// 18. Kitob objectlari berilgan. Har bir kitob uchun
// o'qilgan/o'qilmagan holatini WeakMap da saqlang.

const book1 = { title: "JS Basics" };
const book2 = { title: "React" };
const book3 = { title: "Node.js" };

const books = new WeakMap();

books.set(book1, "O'qilgan");
books.set(book2, "O'qilmagan"); 
books.set(book3, "O'qilgan");  

console.log(books.get(book2))