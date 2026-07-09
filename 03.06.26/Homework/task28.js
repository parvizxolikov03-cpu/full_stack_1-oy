/*
Mahsulotlar narxlari saqlangan object berilgan. Eng qimmat va eng arzon mahsulotni
aniqlang.
*/

const products = {
    "olma": 19000,
    "banan": 10800,
    "nok": 20100,
    "uzum": 1000,
    "ananas": 500,
    "mandarin": 20,
}
const arr = []
for ([key, val] of Object.entries(products)){
    arr.push([val, key])
}
console.log(`eng qimmati:`, arr.sort((a, b) => b[0] - a[0])[0][1])
console.log(`eng arzoni:`, arr.sort((a, b) => a[0] - b[0])[0][1])