// 26. Berilgan object allaqachon qayta ishlanganmi yoki
// yo'qligini WeakSet yordamida aniqlang.

const obj1 = { id: 1 };
const obj2 = { id: 2 };
const obj3 = { id: 3 };

const processed = new WeakSet();

processed.add(obj1);
processed.add(obj3);

console.log(processed.has(obj1)); 
console.log(processed.has(obj2)); 
console.log(processed.has(obj3)); 