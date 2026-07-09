// Eng kichik bo'luvchi O'rta
// Sonning 1 dan boshqa eng kichik bo'luvchisini toping. Misol: 15 -> 3.

let n = 15;

const arr = [];
for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    arr.push(i);
  }
}
console.log(Math.min(...arr));
