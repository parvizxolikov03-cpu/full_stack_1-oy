// 2. Ikki son orasidagi tub sonlar
// Topshiriq:
// Ikkita son a va b qabul qilib, a dan b gacha (ikkalasini ham qo'shgan holda) bo'lgan
// barcha tub sonlarni massiv ko'rinishida qaytaruvchi tubSonlar funksiyasini yozing.
// Misollar:

function tubmi(n) {
  if (n < 2) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function tubSonlar(a, b) {
  const arr = [];
  for (let i = a; a < b; a++) {
    if (tubmi(a)) {
      arr.push(a);
    }
  }
  return arr;
}

console.log(tubSonlar(2, 10)); // [2, 3, 5, 7]
console.log(tubSonlar(10, 20)); // [11, 13, 17, 19]
console.log(tubSonlar(8, 10)); // []
