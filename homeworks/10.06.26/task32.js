// Har sekundda progress foizini chiqaring.

let i = 0;

const timer = setInterval(() => {
  console.log((`${i += 10}%`));
  if (i === 100) {
    clearInterval(timer);
  }
}, 1000);
