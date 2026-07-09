// 27. Talaba objecti berilgan
// Destructuring yordamida faqat ism va ballni ajratib oling.

const student = {
  firstName: "Ali",
  lastName: "Valiyev",
  age: 20,
  score: 95
};

const { firstName, score } = student;

console.log(firstName);
console.log(score);

