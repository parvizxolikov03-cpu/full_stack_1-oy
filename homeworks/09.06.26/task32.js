// 32. Mahsulotlar arrayi berilgan. Har bir mahsulotdan name ni
// destructure qiling, qolgan ma'lumotlarni rest orqali ajratib
// yangi array hosil qiling

const products = [
  { name: "Laptop", price: 1000, brand: "HP" },
  { name: "Phone", price: 500, brand: "Samsung" },
  { name: "Headphones", price: 100, brand: "Sony" }
];

const result = products.map(({ name, ...rest }) => {
  return { name, ...rest };
});

console.log(result);