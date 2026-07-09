// 5. Object ichidagi eng katta qiymatni toping.

const max_num = (n) => {
  return Math.max(...Object.values(n));
};

nums = {
  math: 85,
  physics: 90,
  english: 78,
};

console.log(max_num(nums));
