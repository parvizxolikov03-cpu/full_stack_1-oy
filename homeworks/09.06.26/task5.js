// 5. Foydalanuvchilar ro'yxati berilgan. Login nomlarini kalit,
// yoshlarini qiymat sifatida Map ga joylashtiring.

const users = [
  { login: "ali", age: 20 },
  { login: "vali", age: 25 },
  { login: "sardor", age: 22 }
];

const map = new Map();

for (const user of users) {
  map.set(user.login, user.age);
}

console.log(map);