// 7. Object ichidagi qaysi propertylar
// enumerable ekanligini aniqlang.

const user = {
  name: "Ali",
  age: 20,
};

Object.defineProperty(user, "id", {
  value: 1,
  enumerable: false,
});

for (let key in user) {
  console.log(key);
}
