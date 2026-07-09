// 17. Foydalanuvchi objectlari berilgan. Har bir foydalanuvchi
// uchun oxirgi weak_map vaqtini WeakMap da saqlang.

const user1 = { name: "Ali" };
const user2 = { name: "Vali" };

const weak_map = new WeakMap();

weak_map.set(user1, "09:00");
weak_map.set(user2, "10:30");

console.log(weak_map.get(user1));
console.log(weak_map.get(user2));