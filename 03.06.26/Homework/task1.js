// 1. Berilgan sonning barcha bo'luvchilarini topadigan function yozing.


function arguments(n) {
  let i = 0;
  while (i < n) {
    if (n % i == 0) console.log(i);
    i++;
  }
}

arguments(10);
