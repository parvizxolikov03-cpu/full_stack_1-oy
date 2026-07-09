// Har sekundda massivning navbatdagi elementini
// chiqaring.

const arr = ["Ali", "Vali", "Sami"];

let i = 0;

const timer = setInterval(() => {
    console.log(arr[i]);
    i++;

  if (i === arr.length) {
    clearInterval(timer);
  }
}, 1000);
