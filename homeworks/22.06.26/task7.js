// 7. Best Time to Buy and Sell Stock
// Bir marta sotib olib, bir marta sotish mumkin. Maksimal foydani toping. Misol:
// maxProfit([7,1,5,3,6,4]) => 5

function maxProfit(arr) {
  let min = arr[0];
  let minindex = 0;
  let max = 0;
  let maxindex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      minindex = i;
    }
  }
  for (let i = minindex; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      maxindex = i;
    }
  }

  return arr[maxindex] - arr[minindex];
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
