let text = "Salom olam ahliga";

let max = "";

for (let s of text.split(" ")) {
  if (s.length > max.length) {
    max = s;
  }
}

console.log(max);
