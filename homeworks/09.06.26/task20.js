// 20. Product objectlari berilgan. Har bir mahsulot uchun
// chegirma foizini WeakMap da saqlang.

const product1 = { name: "Laptop" };
const product2 = { name: "Phone" };
const product3 = { name: "Headphones" };

const products = new WeakMap();

products.set(product1, 10); 
products.set(product2, 15); 
products.set(product3, 5);  

console.log(products.get(product1)); 
console.log(products.get(product2)); 
