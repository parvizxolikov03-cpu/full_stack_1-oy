// Har sekundda sonni 2 ga oshirib boring va 20 ga
// yetganda to'xtating.

let i = 0;

const timer = setInterval(() => {
  console.log((i += 2));
  if (i === 20) {
    clearInterval(timer);
  }
}, 1000);
