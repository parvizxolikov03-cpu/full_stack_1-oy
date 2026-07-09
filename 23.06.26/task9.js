// 9. Eng ko'p takrorlangan element
// Topshiriq:
// Sonlar massivi qabul qilib, eng ko'p marta uchraydigan elementni qaytaruvchi
// engKopTakror funksiyasini yozing. (Bittadan ortiq bo'lsa, birinchi uchraganini
// qaytaring.)
// Misollar:

function engKopTakror(arr) {
  const map = new Map();
  for (let i of arr) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }
  maxNum = 0;
  maxWord = "";
  for (let [key, val] of map) {
    if (maxNum < val) {
      maxNum = val;
      maxWord = key;
    }
  }
  return maxWord;
}

console.log(engKopTakror([1, 2, 2, 3, 2])); // 2
console.log(engKopTakror([4, 4, 5, 5, 5])); // 5
console.log(engKopTakror([7])); // 7
