// Uzunlikni hisobla Oson
// length xossasidan foydalanmasdan massiv uzunligini sanang (sikl bilan). Misol: [1,2,3,4] ->
// 4.

const arr = [1, 2, 3, 4];

let count = 0;
for (let i of arr) {
  count++;
}

console.log(count);
