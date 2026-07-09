function juftSum(num) {
  let sum = 0;
  let n;
  while (num) {
    n = num % 10;

    if (n % 2 == 0) sum += n;

    ((num = num / 10), (num -= num % 1));
  }

  return sum;
}

console.log(juftSum(23453856));
