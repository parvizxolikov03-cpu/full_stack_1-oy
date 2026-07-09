// 1. Two Sum
// Berilgan nums massivida yig'indisi target ga teng bo'lgan ikkita element indekslarini toping. Misol:
// twoSum([2,7,11,15], 9) => [0,1]

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

const arr = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(arr, target));
