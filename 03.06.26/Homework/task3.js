// 3. Object ichidagi barcha qiymatlar yig'indisini hisoblang.

nums = {
  math: 85,
  physics: 90,
  english: 78,
};

total = 0;
for (i of Object.values(nums)) total += i;

console.log(total);
