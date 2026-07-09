// 19. Employee objectlari berilgan. Har biri uchun maxfiy ID ni
// WeakMap yordamida saqlang.

const emp1 = { name: "Ali" };
const emp2 = { name: "Vali" };
const emp3 = { name: "Sardor" };

const ids = new WeakMap();

ids.set(emp1, "EMP-001");
ids.set(emp2, "EMP-002");
ids.set(emp3, "EMP-003");

console.log(ids.get(emp1)); 
console.log(ids.get(emp2)); 