// 10. Longest Common Prefix
// Stringlar massivining umumiy prefiksini toping. Misol: longestCommonPrefix(['flower','flow','flight'])
// => 'fl'

function longestCommonPrefix(arr) {
  let i = 1;
  let prefix = arr[0];
  while (i < arr.length) {
    if (!arr[i].startsWith(prefix)) {
      prefix = prefix.slice(0, 2);
    } else {
      i++;
    }
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
