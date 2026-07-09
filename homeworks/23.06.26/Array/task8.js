// 8
// O'rtacha qiymat O'rta
// Massivdagi sonlarning o'rtacha arifmetik qiymatini hisoblang. Misol: [4,8,12] -> 8.

const arr = [4, 8, 12]

console.log(arr.reduce((a, b) => (a + b) / arr.length ))