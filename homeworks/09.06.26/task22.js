// 22. Foydalanuvchi objectlari va ularning reytinglari berilgan.
// Eng yuqori reytingli foydalanuvchini aniqlang.

const users = [
  { name: "Ali", rating: 4.5 },
  { name: "Vali", rating: 3.8 },
  { name: "Sardor", rating: 4.9 },
  { name: "Jasur", rating: 4.2 }
];

let topUser = users[0];

for (const user of users) {
  if (user.rating > topUser.rating) {
    topUser = user;
  }
}

console.log(topUser);