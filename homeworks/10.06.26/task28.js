// 15 soniyalik taymer yarating.

let i = 0;

const timer = setInterval(() => {
    console.log("tik tak");
    i++;

  if (i === 15) {
    console.log("BOOOM")
    clearInterval(timer);
  }
}, 1000);
