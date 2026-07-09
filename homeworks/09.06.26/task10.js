// 10. Ikki array berilgan. Ularning umumiy elementlarini Set
// yordamida toping.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const set = new Set(arr1);

for (const item of arr2) {
  if (set.has(item)) {
    console.log(item);
  }
};