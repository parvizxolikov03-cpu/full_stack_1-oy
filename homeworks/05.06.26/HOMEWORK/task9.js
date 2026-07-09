const toSortedNums = (nums) => {
  return nums.sort((a, b) => a - b);
};

let sonlar = [45, 12, 88, 3, 67];

console.log(toSortedNums(sonlar));
