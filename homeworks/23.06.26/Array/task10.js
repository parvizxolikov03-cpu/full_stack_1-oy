// 0 Ikkinchi katta son O'rta
// Massivdagi ikkinchi eng katta sonni toping. Misol: [10, 5, 8, 10] -> 8.

const arr = [10, 5, 8, 10]

console.log([...new Set(arr)].sort((a, b) => b - a)[1])