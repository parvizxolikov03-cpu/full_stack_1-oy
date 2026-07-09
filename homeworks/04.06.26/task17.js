function mostLatter(text) {
  const latters = {};

  for (let latter of text.split("")) {
    if (latter in latters) {
      latters[latter] += 1;
    } else {
      latters[latter] = 1;
    }
  }

  let maxC = 0;
  let maxL;

  for (key in latters) {
    if (maxC < latters[key]) {
      maxC = latters[key];
      maxL = key;
    }
  }

  return maxL;
}

console.log(mostLatter("nnbbbbbbnnaabbbbbbaaaaa"));
