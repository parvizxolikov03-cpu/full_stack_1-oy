let mahsulotlar = ["gilos", "olma", "anor", "uzum", "olma", "banan"];

console.log(mahsulotlar.indexOf("olma"));
console.log(mahsulotlar.lastIndexOf("olma"));

mahsulotlar.indexOf("gilos") !== -1
  ? console.log(mahsulotlar.indexOf("gilos"))
  : console.log("Topilmadi");
