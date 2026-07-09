// 10. Object.keys() va for...in natijalariga
// enumerable flag qanday ta'sir qilishini amalda
// ko'rsating.

const user = {
    name: "Ali",
    age: 20
};

Object.defineProperty(user, "id", {
    value: 1,
    enumerable: false
});

console.log(Object.keys(user));

for (let key in user) {
    console.log(key);
}