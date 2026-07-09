// 4. Mahsulotlar Ombori
// Product class yarating. name, price. static products massivida barcha mahsulotlar saqlansin.
// static getAllProducts().

class Product {
  static products = [];
  constructor(name, price) {
    this.name = name;
    this.price = price;
    Product.products.push([this.name, this.price]);
  }
  static getAllProducts() {
    return Product.products;
  }
}
const product1 = new Product("apple", 15000);
const product2 = new Product("banana", 20000);
const product3 = new Product("coconut", 30000);
console.log(Product.getAllProducts());
