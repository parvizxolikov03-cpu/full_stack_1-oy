// 2. Berilgan sonning raqamlari yig'indisini hisoblaydigan arrow function yozing

const sum_nums = (n) => {
  total = 0;
  for (i of String(n)) total += +i;
  return total;
};

console.log(sum_nums(123455));
