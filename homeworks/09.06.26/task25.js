// 25. Product objectlari berilgan. Savatchaga qo'shilgan
// mahsulotlarni WeakSet yordamida saqlang

const product1 = { name: "Laptop" };
const product2 = { name: "Phone" };
const product3 = { name: "Headphones" };

const cart = new WeakSet();

cart.add(product1);
cart.add(product3);

console.log(cart.has(product1)); 
console.log(cart.has(product2)); 
console.log(cart.has(product3)); 