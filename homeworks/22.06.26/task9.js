// 9. Merge Two Sorted Arrays
// Ikki tartiblangan massivni bitta tartiblangan massivga birlashtiring. Misol: merge([1,3,5], [2,4,6]) =>
// [1,2,3,4,5,6]

function merge(arr1, arr2) {
  return arr1.concat(arr2).toSorted();
}

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

console.log(merge(arr1, arr2));
