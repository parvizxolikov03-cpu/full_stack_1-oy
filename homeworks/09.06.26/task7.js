// 7. Map ichida eng ko'p takrorlangan qiymatni aniqlang.

const map = new Map([
  ["a", 10],
  ["b", 20],
  ["c", 10],
  ["d", 30],
  ["e", 10],
  ["f", 20]
]);

const new_map = new Map();

for (const value of map.values()) {
  new_map.set(value, (new_map.get(value) || 0) + 1);
}

let n;
let max = 0;

for (const [key, val] of new_map) {
  if (val > max) {
    max = val;
    n = key;
  }
}

console.log(n);