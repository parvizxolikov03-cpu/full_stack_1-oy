// 2. Valid Anagram
// Ikki satr bir-birining anagrammasi ekanligini tekshiring. Misol: isAnagram('listen', 'silent') => true

function isAnagram(word, word1) {
  let count = 0;
  if (word.length !== word1.length) {
    return false;
  }
  for (let i of word.split("")) {
    if (word1.includes(i)) {
      count++;
    }
  }
  if (word1.length === count) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram("listen", "sileet"));
