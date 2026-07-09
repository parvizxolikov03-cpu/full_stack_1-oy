function isParol(parol) {
  return parol.length >= 8 && /[A-Z]/.test(parol) && /[0-9]/.test(parol);
}

console.log(isParol("abc12345"));
