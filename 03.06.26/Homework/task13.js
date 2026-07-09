// 13. Berilgan sonning bo'luvchilari sonini hisoblang.

function arguments(n) {
  let i = 0;
  let sum = 0;
  while (i < n) {
    if (n % i == 0) sum += 1;
    i++;
  }
  return sum;
}

console.log(arguments(10));
