// 3. Matndagi har bir harf necha marta qatnashganini Map
// yordamida hisoblang.

const text = "javascript";
const letters = new Map();

for (const char of text) {
  if (letters.has(char)) {
    letters.set(char, letters.get(char) + 1);
  } else {
    letters.set(char, 1);
  }
}

console.log(letters);
