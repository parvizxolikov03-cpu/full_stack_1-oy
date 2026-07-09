// 2. Takrorlanmagan birinchi element (Map yoki Set)
// firstUnique(arr) massivdagi birinchi marta takrorlanmagan elementni qaytarsin. Agar barcha
// elementlar takrorlansa, null qaytsin.
// firstUnique([1, 2, 2, 3, 1, 4]) → 3
// firstUnique(["a", "b", "a", "b"]) → null
// Maslahat: element tartibini saqlab qolish muhim — shuning uchun Map qulay

function firstUnique(arr) {
  const map = new Map();

  for (let i of arr) {
    let count = 0;
    for (let j of arr) {
      if (i === j) {
        count++;
      }
    }
    map.set(i, count);
  }
  console.log(map);
  for (let [i, j] of map.entries()) {
    if (j === 1) {
      return i;
    }
  }
  return null;
}

const arr = ["a", "b", "a", "b"];
console.log(firstUnique(arr));
