// 34. Matn berilgan. Har bir so'z necha marta qatnashganini
// Map yordamida hisoblang va eng ko'p uchragan so'zni
// toping.


const text = "salom dunyo salom js dunyo salom";

const map = new Map();

text.split(" ").forEach(word =>
  map.set(word, (map.get(word) || 0) + 1)
);

const [maxWord] = [...map.entries()].reduce((a, b) =>
  b[1] > a[1] ? b : a
);

console.log(maxWord);