let arr = [1,2,3]


console.log([...String(BigInt(arr.join(""))+1n)].map(Number));