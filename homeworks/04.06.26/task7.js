let result = "";

for (let i = 1; i < 8; i++) {
  if (Math.round(Math.random())) {
    result += String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  } else {
    result += String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  }
}
console.log(result);
