// 18. Array ichida eng ko'p takrorlangan elementni toping.

const arr = [1, 4, 6, 7, 4, 2];

console.log(
  arr.reduce((a, b) =>
    arr.filter(v => v === a).length > arr.filter(v => v === b).length
      ? a
      : b,
  ),
);
