// 23. Tizimga kirgan foydalanuvchilar objectlarini WeakSet ga
// qo'shing va berilgan foydalanuvchi online yoki offline
// ekanligini aniqlang.

const user1 = { name: "Ali" };
const user2 = { name: "Vali" };
const user3 = { name: "Sardor" };

const old = new WeakSet();

old.add(user1);
old.add(user3);