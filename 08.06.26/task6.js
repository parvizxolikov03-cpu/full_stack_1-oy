// 6. Array ichidagi eng uzun stringni toping.

const arr = ["olma", "banan", "nok", "qovun", "ananas"];

console.log(arr.reduce((a, b) => {
    return a.length > b.length ? a : b
}));