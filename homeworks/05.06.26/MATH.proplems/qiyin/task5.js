let nums = [];

for (let i = 0; i < 5; i++) {
    nums.push(Math.floor(Math.random() * 100));
}

let result = nums.reduce((sum, son) => sum + son, 0);
let avg = result / nums.length;

console.log(nums);
console.log(avg);