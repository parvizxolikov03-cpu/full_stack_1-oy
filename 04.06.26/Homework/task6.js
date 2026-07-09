let n = 12345;

arr = [];

for (i of String(n)){
    arr.push(+i)
}
let b = arr[0]
arr[0] = arr.at(-1) 
arr[arr.length - 1] = b

console.log(+arr.join(""));