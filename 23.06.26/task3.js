// 3. Eng katta umumiy bo'luvchi (EKUB)
// Topshiriq:
// Ikkita musbat butun son qabul qilib, ularning eng katta umumiy bo'luvchisini
// qaytaruvchi ekub funksiyasini yozing.
// Misollar:

function ekub(a, b) {
  let c = 1
  for (let i = 0; i < a; i++) {
    if (a % i == 0 && b % i == 0) {
      c = i;
    }
  }

  return c;
}

console.log(ekub(12, 18)); // 6
console.log(ekub(7, 13)); // 1
console.log(ekub(20, 5)); // 5
