// 4. Sonlar arrayi berilgan. Har bir sonning kvadratini Map ichida
// saqlang.

const arr = [1,2,3,4,5,6];

const map = new Map();

for(let [key, val = 0] of arr.entries()){
    map.set(key + 1, val ** 2)
};

console.log(map)