// 6. Armstrong soni
// Topshiriq:
// Uch xonali son qabul qilib, u Armstrong soni (har bir raqamining kubi yig'indisi sonning
// o'ziga teng) bo'lsa true, aks holda false qaytaruvchi armstrong funksiyasini yozing.
// Misollar:

function armstrong(n) {
  let count = 0;
  for (let i of String(n)) {
    count += Number(i) ** 3;
  }
  return count === n;
}

console.log(armstrong(153)); // true (1+125+27)
console.log(armstrong(370)); // true
console.log(armstrong(100)); // false
