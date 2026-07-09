//  Eng ko'p takrorlangan Qiyin
// Massivdagi eng ko'p marta uchragan elementni va uning sonini toping. Misol: [1,2,2,3,2]
// -> {qiymat:2, soni:3}.

const arr = [1, 2, 3, 2, 4, 2];

const map = new Map();

for (let i of arr) {
  if (map.has(i)) {
    map.set(i, map.get(i) + 1);
  } else {
    map.set(i, 1);
  }
}
let maxKey = "";
let maxVal = 0;
for (let [key, val] of map) {
  if (maxVal < val) {
    maxVal = val;
    maxKey = key;
  }
}
console.log({ qiymat: maxKey, soni: maxVal });
