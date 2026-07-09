// 19. Ichma-ich array berilgan. Barcha sonlar yig'indisini
// hisoblang.

const arr = [[1, 2], [3, 4], [5]];

console.log(arr.flat(Infinity).reduce((a, b) => a += b))