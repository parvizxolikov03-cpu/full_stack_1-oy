// 14. Object berilgan. Faqat configurable bo'lgan
// propertylarni aniqlang.

const obj = {
  name: "Ali",
  age: 20
};

const descriptors = Object.getOwnPropertyDescriptors(obj);

for (let key in descriptors) {
  if (descriptors[key].configurable) {
    console.log(key);
  }
}