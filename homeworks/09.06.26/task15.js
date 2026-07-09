// 15. Array ichidagi eng ko'p takrorlangan elementni toping
// (Set va boshqa metodlardan foydalanib).

const arr = [1, 2, 3, 2, 4, 2, 5, 3, 3, 3];

let max = 0;
let result;

for (const item of new Set(arr)) {
  const count = arr.filter(x => x === item).length;

  if (count > max) {
    max = count;
    result = item;
  }
}

console.log(result);