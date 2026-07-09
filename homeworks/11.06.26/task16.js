// 16. User object yarating.
// {
// id,
// username,
// password
// }
// password hech qachon iteratsiyada chiqmasligi
// kerak.

const user = {
  id: 1,
  username: "Parviz"
};

Object.defineProperty(user, "password", {
  value: "123456",
  writable: true,
  enumerable: false,
  configurable: true
});

for (let key in user) {
  console.log(key);
}

console.log(Object.keys(user));
