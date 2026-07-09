// Son 100 ga yetguncha har sekundda 5 ga oshirib boring.

let i = 0;

const timer = setInterval(() => {
  console.log((i += 5));
  if (i === 100) {
    clearInterval(timer);
  }
}, 1000);
