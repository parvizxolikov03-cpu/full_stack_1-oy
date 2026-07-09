// 3. Chuqur teskari (recursion + array)
// deepReverse(arr) massivni teskari qilsin, ichidagi har bir massivni ham (necha qatlam bo‘lsa ham)
// teskari qilsin.
// deepReverse([1, 2, [3, 4], 5]) → [5, [4, 3], 2, 1]
// deepReverse([1, [2, [3, 4]]]) → [[[4, 3], 2], 1]
// Cheklov: faqat Array.isArray ishlatib tekshiring, qolgani sizning algoritmingiz.

function deepReverse(arr) {
  for (let i of arr) {
    if (Array.isArray(i)) {
      deepReverse(i);
    }
  }
  return arr.reverse();
}

const arr = [1, 2, [3, 4], 5];

console.log(deepReverse(arr));
