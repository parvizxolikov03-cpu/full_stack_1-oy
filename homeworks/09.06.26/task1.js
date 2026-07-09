// 1 . Talabalarning ismi va ballari berilgan. Map yordamida eng
// yuqori ball olgan talabani toping.

const map = new Map();

map.set("Aziz", 19).set("Jahongir", 21).set("Ali", 22);

let student = "";
let max = 0;

for (let [key, val] of map) {
  if (val > max) {
    max = val;
    student = key;
  }
}
console.log(student, max)
