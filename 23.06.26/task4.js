// 4. Anagramma tekshiruvi
// Topshiriq:
// Ikkita so'z qabul qilib, ular anagramma (bir xil harflardan, bir xil sonda tuzilgan) bo'lsa
// true, aks holda false qaytaruvchi anagramma funksiyasini yozing.
// Misollar:
function anagramma(word, word1) {
//   let count = 0;
//   if (word.length !== word1.length) {
//     return false;
//   }
//   for (let i of word.split("")) {
//     if (word1.includes(i)) {
//       count++;
//     }
//   }
//   if (word1.length === count) {
//     return true;
//   } else {
//     return false;
//   }
return word.split("").sort().join("") === word1.split("").sort().join("")
}

console.log(anagramma("tom", "mot")); // true
console.log(anagramma("olma", "lamo")); // true
console.log(anagramma("kun", "tun")); // false
