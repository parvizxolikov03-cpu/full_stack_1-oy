// 7. O'nlikdan ikkilik sanoqqa
// Topshiriq:
// Musbat butun son qabul qilib, uning ikkilik (binary) ko'rinishini matn (string) sifatida
// qaytaruvchi ikkilik funksiyasini yozing. (toString'siz, sikl bilan yozing.)
// Misollar:

function ikkilik(n) {
  let arr = [];
  while (n) {
    arr.unshift(n % 2);
    n = Math.floor(n / 2);
  }
  return arr.join("");
}

console.log(ikkilik(5)); // "101"
console.log(ikkilik(10)); // "1010"
console.log(ikkilik(1)); // "1"
