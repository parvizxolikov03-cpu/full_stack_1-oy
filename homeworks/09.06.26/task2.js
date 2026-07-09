// 2. Mahsulot nomi va narxi saqlangan Map berilgan. Narxi 100
// dan katta mahsulotlarni ajratib oling.

const map = new Map();

map.set("banana", 400)
    .set("apple", 80)
    .set("coconut", 500);

const arr = [];
for (let [name, price] of map) {
  if (price > 100) {
    arr.push([name, price]);
  }
};

console.log(arr)
