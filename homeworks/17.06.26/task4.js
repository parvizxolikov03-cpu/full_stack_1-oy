// 4. Guruhlash (objects + reduce)
// groupBy(arr, key) obyektlar massivini berilgan key bo‘yicha guruhlasin.
// const users = [
//  { name: "Ali", city: "Tashkent" },
//  { name: "Vali", city: "Samarqand" },
//  { name: "Guli", city: "Tashkent" }
// ];
// groupBy(users, "city")
// → {
// Tashkent: [{name:"Ali",...}, {name:"Guli",...}],
// Samarqand: [{name:"Vali",...}]
// }

function groupBy(arr, key) {
  const obj = {};
  for (let i of arr) {
    for (let j of key) {
      if (i["city"] == j) {
        obj[j] = [i];
      } else {
        obj[j] = [i]
      }
    }
  }
  return obj;
}

const users = [
  { name: "Ali", city: "Tashkent" },
  { name: "Vali", city: "Samarqand" },
  { name: "Guli", city: "Tashkent" },
];

key = ["Tashkent", "Samarqand", "Tashkent"];

console.log(groupBy(users, key));
