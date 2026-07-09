// 5. Fibonachchi ketma-ketligi
// Topshiriq:
// Son n qabul qilib, Fibonachchi ketma-ketligining dastlabki n ta hadidan iborat massiv
// qaytaruvchi fibonachchi funksiyasini yozing. (Har bir had oldingi ikkitasining yig'indisi.)
// Misollar:

function fibonachchi(n) {
  const arr = [];
  let first = 0;
  let second = 1;
  arr.push(first, second);
  for (let i = 2; i < n; i++) {
    let next = first + second;
    arr.push(next);
    first = second;
    second = next;
  }
  return arr;
}

// console.log(fibonachchi(5)) // [0, 1, 1, 2, 3]
// fibonachchi(1) // [0]
console.log(fibonachchi(7)); // [0, 1, 1, 2, 3, 5, 8]
