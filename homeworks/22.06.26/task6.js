// 6. Move Zeroes
// Barcha 0 larni massiv oxiriga suring. Misol: moveZeroes([0,1,0,3,12]) => [1,3,12,0,0]

function moveZeroes(arr) {
  const arr1 = [];
  const arr2 = [];
  for (let i of arr) {
    if (i === 0) {
      arr1.push(i);
    } else {
      arr2.push(i);
    }
  }
  return arr2.concat(arr1);
}

console.log(moveZeroes([0, 1, 0, 0, 0, 3, 12]));
