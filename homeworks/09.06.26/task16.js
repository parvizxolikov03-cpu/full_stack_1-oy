// 16. Faqat bir marta uchraydigan elementlarni toping.

const arr = [1, 2, 3, 2, 4, 5, 3];

const result = arr.filter(
  item => arr.indexOf(item) === arr.lastIndexOf(item)
);

console.log(result);