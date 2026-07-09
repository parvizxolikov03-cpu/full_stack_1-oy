// 30. Foydalanuvchilar arrayi berilgan
// Yoshi 18 dan katta foydalanuvchilarning ismlaridan iborat yangi
// array hosil qiling.

const arr = [
{ name: "Ali", age: 20 },
{ name: "Vali", age: 17 },
{ name: "Sami", age: 25 }
];

console.log(arr.filter(item => item.age > 18));