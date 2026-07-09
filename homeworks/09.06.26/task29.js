// 29. Array berilgan
// Destructuring yordamida birinchi, ikkinchi va oxirgi elementlarni
// alohida o'zgaruvchilarga ajrating.

const arr = [10, 20, 30, 40, 50];

const [one, two , , , last] = arr;

console.log(one, two, last)
