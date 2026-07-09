// 7. Kutubxona tizimi
// Book
// ↓
// EBook
// Qo'shimcha property:
// fileSize
// Kitob ma'lumotlarini chiqaruvchi metod yozing.

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

}

class EBook extends Book {
  constructor(title, author, fileSize) {
    super(title, author);
    this.fileSize = fileSize;
  }

  getInfo() {
    console.log(`Kitob: ${this.title}`);
    console.log(`Muallif: ${this.author}`);
    console.log(`Fayl hajmi: ${this.fileSize} MB`);
  }
}

const ebook = new EBook("JavaScript Fundamentals", "John Doe", 15);

ebook.getInfo();
