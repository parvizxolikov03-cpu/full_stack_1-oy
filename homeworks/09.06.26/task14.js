// 14. Ikki array bir xil elementlardan tashkil topganligini
// tekshiring.

const arr1 = [1, 2, 3];
const arr2 = [3, 2, 1];

const result =
  arr1.length === arr2.length &&
  [...new Set(arr1)].every(item => arr2.includes(item));

console.log(result);