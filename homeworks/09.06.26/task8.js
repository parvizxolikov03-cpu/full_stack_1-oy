// 8. Telefon raqamlari saqlangan Map berilgan. Berilgan raqam
// qaysi foydalanuvchiga tegishli ekanligini toping.

const phones = new Map([
  ["Ali", "901234567"],
  ["Vali", "991112233"],
  ["Sardor", "935556677"]
]);

const number = "991112233";

for (const [name, phone] of phones) {
  if (phone === number) {
    console.log(name);
  }
};

