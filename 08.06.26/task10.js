// 10. Array ichidagi sonlarning o'rtacha qiymatini hisoblang.

const arr = [1,2,4,7,4,8];

console.log(+(arr.reduce((a, b) => a += b) / arr.length).toFixed(2))