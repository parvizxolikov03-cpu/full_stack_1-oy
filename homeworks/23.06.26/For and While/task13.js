// EKUB O'rta
// Ikki sonning eng katta umumiy bo'luvchisini sikl bilan toping. Misol: (12, 18) -> 6

function ekub(a, b) {
  let c = 1;
  for (let i = 0; i < a; i++) {
    if (a % i == 0 && b % i == 0) {
      c = i;
    }
  }

  return c;
}

console.log(ekub(12, 18));
