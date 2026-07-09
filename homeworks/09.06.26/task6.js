// 6. Ikki ta Map berilgan. Umumiy kalitlarni toping.

const map1 = new Map([
  ["ali", 20],
  ["vali", 25],
  ["sardor", 22]
]);

const map2 = new Map([
  ["vali", 30],
  ["jasur", 18],
  ["ali", 21]
]);

for (const key of map1.keys()) {
  if (map2.has(key)) {
    console.log(key);
  }
};