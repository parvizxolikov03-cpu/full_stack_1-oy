//  Har sekundda random rang nomini chiqaring.

let i = 0;
const colors = ["red", "blue", "green", "yellow", "black", "purple", "orange"];

const timer = setInterval(() => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  console.log(colors[randomIndex]);
  i++;
  if (i === colors.length) {
    clearInterval(timer);
  }
}, 1000);
