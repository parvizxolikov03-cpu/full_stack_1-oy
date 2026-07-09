function countSpace(text) {
  let count = 0;
  for (simbol of text) {
    if (simbol == " ") {
      ++count;
    }
  }
  return count;
}

console.log(countSpace(" oijf eiw weiof. fwj f"));
