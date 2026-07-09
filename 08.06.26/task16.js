// 26. Array ichidan faqat noyob (bir marta uchraydigan)
// elementlarni ajrating.

const arr = [1, 2, 2, 3, 4, 4, 5];

console.log(arr.filter(item => {
    return arr.indexOf(item) === arr.lastIndexOf(item)
}));
