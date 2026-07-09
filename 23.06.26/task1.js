// 1. Tub sonni aniqlash
// Topshiriq:
// Butun son qabul qilib, u tub son (faqat 1 ga va o'ziga bo'linadigan, 1 dan katta son)
// bo'lsa true, aks holda false qaytaruvchi tubmi funksiyasini yozing.
// Misollar:
function tubmi(n) {
  if (n < 2) return false;

  for (let i = 2; i * i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(tubmi(7)); // true
console.log(tubmi(10)); // false
console.log(tubmi(1)); // false
