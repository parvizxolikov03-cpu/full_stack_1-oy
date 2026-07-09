// 11. E-commerce Savatcha
// Cart class yarating. #items. addItem(name, price), removeItem(name),
// getTotalPrice(). static currency = 'UZS'.

class Cart {
  #items = {};
  static currency = "UZS";

  addItem(name, price) {
    this.#items[name] = price;
    return this.#items;
  }
  removeItem(name) {
    delete this.#items[name];
    return this.#items;
  }

  getTotalPrice() {
    return Object.values(this.#items).reduce((a, b) => a + b);
  }
}

const cart = new Cart();

cart.addItem("Apple", 5000);
cart.addItem("Banana", 10000);
cart.addItem("Coconut", 15000);

console.log(cart.removeItem("Apple"));

console.log(cart.getTotalPrice());
