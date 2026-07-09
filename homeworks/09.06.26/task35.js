// 35. Foydalanuvchilar objectlari arrayi berilgan. WeakMap
// yordamida har bir foydalanuvchining oxirgi faollik vaqtini
// saqlang va eng faol foydalanuvchini toping.

const users = [
  { name: "Ali" },
  { name: "Vali" },
  { name: "Sardor" }
];

const weak_map = new WeakMap();

weak_map.set(users[0], 5);   
weak_map.set(users[1], 12);
weak_map.set(users[2], 7);

const user = users.reduce((max, user) =>
  weak_map.get(user) > weak_map.get(max) ? user : max
);

console.log(user);