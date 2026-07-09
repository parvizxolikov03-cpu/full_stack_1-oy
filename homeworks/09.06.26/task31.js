// 31. Talabalar haqidagi objectlar arrayi berilgan. Destructuring
// va Rest operatorlarini birgalikda ishlatib:
// ● ismni alohida ajrating;
// ● qolgan propertylarni yangi objectga yig'ing;
// ● eng yuqori ball olgan talabani toping.

const students = [
  { name: "Ali", age: 20, score: 85 },
  { name: "Vali", age: 21, score: 92 },
  { name: "Sardor", age: 19, score: 78 },
];

// for (const { name, ...otherInfo } of students) {
//   console.log(name);
//   console.log(otherInfo);
// }

let topStudent = students[0];

for (const { name, ...rest } of students) {
  if (rest.score > topStudent.score) {
    topStudent = { name, ...rest };
  }
}

console.log(topStudent);