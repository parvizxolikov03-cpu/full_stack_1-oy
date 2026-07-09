// 11. n sonigacha bo'lgan Fibonacci ketma-ketligini hosil qiling.

let num = 50
const arr = [0, 1]
for (let i = 0; true; i++) {
    a = (arr[arr.length - 1 ]) + (arr[arr.length - 2])
    if (a >= num) break
    arr.push(a)
}
console.log(...arr)
