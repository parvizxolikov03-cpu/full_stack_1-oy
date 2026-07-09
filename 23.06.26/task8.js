// 8. Takrorlanmas elementlar
// Topshiriq:
// Sonlar massivi qabul qilib, har bir element faqat bir marta uchraydigan yangi massiv
// qaytaruvchi noyob funksiyasini yozing. Tartib saqlanishi kerak.
// Misollar:
function noyob(arr) {
  return [...new Set(arr)];
}

console.log(noyob([1, 2, 2, 3, 3, 3])); // [1, 2, 3]
console.log(noyob([5, 5, 5])); // [5]
console.log(noyob([1, 2, 3])); // [1, 2, 3]
