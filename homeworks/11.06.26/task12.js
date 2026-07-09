// 12. Object ichidagi barcha propertylar uchun
// descriptorlarni tekshiradigan funksiya yozing.

function getInfo(obj) {
  return Object.getOwnPropertyDescriptors(obj);
}

const obj = {
  name: "Ali",
  age: 20,
};

console.table(getInfo(obj));
