// 7. 1 dan n gacha bo'lgan sonlar ichida nechta tub son borligini toping.

let n = 10;
let sum = 1;
for (let i = 3; i < n; i += 2) {
  let b = true;
  for (let j = 3; j <= i / 2; j += 2) {
    if (i % j === 0) {
      b = false;
      break;
    }
  }
  if (b) {
    sum += 1;
  }
}
console.log(sum);
