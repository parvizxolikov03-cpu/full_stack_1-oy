function unshiftQueue(queue) {
  navbat.unshift(queue);
  return navbat;
}

function shiftQueue(queue) {
  navbat.shift(queue);
  console.log("Xizmat ko'rsatildi!");
  return navbat;
}

let navbat = ["Ali", "Vali", "Sardor"];

unshiftQueue("Aziz");
shiftQueue();

console.log(navbat);
