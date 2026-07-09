// 33. Ikki Set berilgan. Ularning:
// ● union
// ● intersection
// ● difference
// to'plamlarini hisoblang.


const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

const union = new Set([...setA, ...setB]);

console.log(union);