function isPalindrom(text) {
  return text == text.split("").reverse().join("");
}

console.log(isPalindrom("ababa"));
