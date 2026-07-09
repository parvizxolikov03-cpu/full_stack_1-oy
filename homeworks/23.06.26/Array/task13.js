// Elementlarni guruhla O'rta
// So'zlar massivini birinchi harfiga ko'ra guruhlang. Misol: ['olma','anor','behi'] ->
// {a:['olma','anor'], b:['behi']}

const arr = ["olma", "anor", "behi"];

const obj = { a: [], b: [] };
let str = "aoiue";
for (let i of arr) {
  if (str.includes(i[0].toLowerCase())) {
    obj["a"].push(i);
  } else {
    obj["b"].push(i);
  }
}
console.log(obj);
