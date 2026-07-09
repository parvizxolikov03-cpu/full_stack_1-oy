// Tub sonlar O'rta
// 1 dan N gacha bo'lgan barcha tub sonlarni chiqaring. Misol: 10 -> 2 3 5 7

function tubmi(n) {
  if (n < 2) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function tubSonlar(n) {
  for (let i = 1; i <= n; i++) {
    if (tubmi(i)) {
      console.log(i)
    }
  }
}

console.log(tubSonlar(10))