// 1. So‘zlardagi unli harflar (string + array methods)
// Funksiya countVowels(text) matndagi har bir so‘zda nechta unli
// harf (a, e, i, o, u) borligini
// hisoblab, obyekt qaytarsin. Katta-kichik harf farqlanmasin.
// countVowels("Salom Dunyo") → { Salom: 2, Dunyo: 2 }
// countVowels("JavaScript") → { JavaScript: 3 }
// Cheklov: text ichida faqat harflar va probellar bo‘ladi

function countVowels(text) {
  const obj = {};
  let str = "aoeiu";
  for (let i of text.split(" ")) {
    let count = 0;
    for (let s of i.split("")) {
      if (str.includes(s)) {
        count++;
      }
    }
    obj[i] = count;
  }
  return obj
}

let text = "Salom Dunyo";
console.log(countVowels(text));
