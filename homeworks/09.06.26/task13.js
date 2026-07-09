// 13. Berilgan array ichida takrorlangan elementlar mavjud yoki
// mavjud emasligini aniqlang

const arr = [1,2,3,4,5,6,1];

console.log(new Set(arr).size !== arr.length ? "Mavjud" : "Mavjud emas")