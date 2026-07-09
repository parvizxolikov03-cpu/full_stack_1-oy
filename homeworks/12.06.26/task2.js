// 2. Product va ElectronicProduct
// Product:
// name
// price
// ElectronicProduct:
// warranty
// Chegirma qo'llangandan keyingi narxni hisoblovchi
// metod yozing.

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ElectronicProduct extends Product {
  constructor(name, price, warranty) {
    super(name, price);
    this.warranty = warranty;
  }
  getInfo() {
    console.log(`Chegirmadan oldin: ${this.price}`);
    console.log(`Chegirmadan keyin: ${this.price * (1 - this.warranty / 100)}`);
  }
}

const product = new ElectronicProduct("Phone", 2000, 10);
product.getInfo();
