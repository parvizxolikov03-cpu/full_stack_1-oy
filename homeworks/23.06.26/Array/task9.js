// Takrorlanmas elementlar O'rta
// Massivdagi takrorlangan elementlarni olib tashlab, faqat noyob qiymatlarni qaytaring.
// Misol: [1,2,2,3,3,3] -> [1,2,3].

const arr = [1,2,2,3,3,3]

console.log([...new Set(arr)])