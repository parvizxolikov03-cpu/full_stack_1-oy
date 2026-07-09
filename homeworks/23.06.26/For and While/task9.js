// Raqamlar yig'indisi O'rta
// Sonning raqamlari yig'indisini hisoblang. Misol: 1234 -> 10.

let n = 12345;

let count = 0;
for (let i of String(n)) {
  count += +i;
}
console.log(count);
