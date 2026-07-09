// 12. Mahsulotlar arrayi berilgan. Eng qimmat mahsulotni
// toping.

const arr = [
  { name: "Book", price: 50 },
  { name: "Phone", price: 500 },
];

console.log(arr.reduce((a, b) => {
    return a > b ? a : b
}));