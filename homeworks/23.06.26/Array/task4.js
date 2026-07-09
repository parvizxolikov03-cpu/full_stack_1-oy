// Massivni teskari aylantir Oson
// reverse() ishlatmasdan massiv elementlarini teskari tartibda qaytaring. Misol: [1,2,3] ->
// [3,2,1].

const arr = [1, 2, 3, 4];

const arr1  = [];
for (let i = arr.length; i > 0; i--) {
  arr1.push(i);
}

console.log(arr1)
