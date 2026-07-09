// 6. Eng ko‘p takrorlangan harf (string + Map + logic)
// mostFrequentChar(str) matnda eng ko‘p uchragan harfni va uning
// sonini qaytarsin. Bir nechtasiteng bo‘lsa — birinchi uchragani.
// mostFrequentChar("javascript") → { char: "a", count: 2 }
// mostFrequentChar("aabbb") → { char: "b", count: 3 }
// Cheklov: probellarni hisobga olmang

function mostFrequentChar(str) {
  const map = new Map();

  for (let i of str.split("")) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }

  const max = new Map();
  max.set("harf", 0).set("count", 0);
  for (let [key, val] of map) {
    if (val > max.get("count")) {
      max.set("harf", key).set("count", val);
    }
  }
  return max
}

let str = "javascript";

console.log(mostFrequentChar(str));
