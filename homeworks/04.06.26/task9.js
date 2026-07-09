function title(text) {
  let words = text.split(" ");
  let n = words.length;

  for (let i = 0; i < n; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}

console.log(title("javascript backend developer"));
