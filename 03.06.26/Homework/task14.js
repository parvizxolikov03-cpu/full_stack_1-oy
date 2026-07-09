// 14. Ikki object berilgan. Qaysi objectda ko'proq property borligini aniqlang.

const student = {
name: "Ali",
age: 20,
score: 95
};

const rating = {
a: 5,
b: 7,
c: 5,
d: 9,
e: 5
};

console.log(Object.keys(student).length < Object.keys(rating).length ? rating : student)

