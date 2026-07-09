// 13. Object berilgan. Faqat writable bo'lgan
// propertylarni aniqlang.

const obj = {
  name: "Ali",
  age: 20
};

const descriptors = Object.getOwnPropertyDescriptors(obj);

for (let key in descriptors) {
  if (descriptors[key].writable) {
    console.log(key);
  }
}