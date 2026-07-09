// Har sekundda tasodifiy son chiqaring va 10 marta
// chiqqandan keyin intervalni to'xtating.

let i = 0;
let count = 0;

const timer = setInterval(() => {
    console.log(Math.floor(Math.random(10) * 100 + 1));
    count ++;
  if (count === 10) {
    clearInterval(timer);
  }
}, 1000);
