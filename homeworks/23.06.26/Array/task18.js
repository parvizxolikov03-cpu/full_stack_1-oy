// Yig'indisi K bo'lgan juftlik Qiyin
// Massivdan yig'indisi berilgan K ga teng bo'lgan barcha juftliklarni toping. Misol: ([1,2,3,4],
// 5) -> [[1,4],[2,3]].

function twoSum(arr, n) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (i + j === n) {
        newArr.push([i, j]);
      }
    }
  }
  return newArr;
}

const arr = [1, 2, 3, 4];
console.log(twoSum(arr, 5));
