let n = 12345;

let arr = String(n).split("");

console.log(new Set(arr).size === arr.length);
