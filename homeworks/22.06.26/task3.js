// 3. Contains Duplicate
// Massivda kamida bitta takrorlanuvchi element mavjudligini aniqlang. Misol:
// containsDuplicate([1,2,3,1]) => true

function containsDublicate(arr) {
  return arr.length !== new Set(arr).size;
}

const arr = [1, 2, 3, 1];
console.log(containsDublicate(arr));
