// 5. Palindrome Number
// Son palindrome ekanligini tekshiring. Misol: isPalindrome(121) => true

function isPalindrome(num) {
  return num === +String(num).split("").reverse().join("");
}

console.log(isPalindrome(1221));
