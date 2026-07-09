// 24. Array ichida kamida bitta tub son mavjudligini tekshiring.

const arr = [12, 4, 1, 2];

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(arr.some(isPrime) ? "Mavjud" : "Mavjud emas");
