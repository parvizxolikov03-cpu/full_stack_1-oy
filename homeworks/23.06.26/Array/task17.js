// Massivni aylantirish Qiyin
// Massivni k qadam o'ngga siljiting. Misol: ([1,2,3,4,5], 2) -> [4,5,1,2,3].

function start(arr, son) {
  let pops = 0;
  let shifts = 0;
  for (let i = 0; i < son; i++) {
    pops = arr.pop();
    shifts = arr.unshift(pops);
  }
  return arr
}

// [1,2,3,4,5]
// start( [1,2,3,4,5,6,4,3] ,5)
console.log(start([1, 2, 3, 4, 5], 2));
