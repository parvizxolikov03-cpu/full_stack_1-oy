// 9. Berilgan matnda nechta unli harf borligini hisoblaydigan function yozing.

const unli_harflar = (s) => {
  let total = 0;
  const vovels = "aeiuoAEIUO";
  for (letter of s) {
    vovels.includes(letter) ? (total += 1) : NaN;
  }
  return total;
};

console.log(unli_harflar("asdasc"));
