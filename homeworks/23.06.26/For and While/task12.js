// Daraja O'rta
// Sonni darajaga ko'taring (Math.pow ishlatmasdan, sikl bilan). Misol: (2, 5) -> 32.

function pow(n, a) {
  let count = 1;

  for (let i = 1; i <= a; i++) {
    count *= n;
  }
  return count;
}

console.log(pow(2, 5));
