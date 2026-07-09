// 8. Object yarating va undagi barcha
// propertylarni read-only qiling.

const user = {
  name: "Ali",
  age: 20,
};

Object.getOwnPropertyDescriptors(user);


console.log(user);
