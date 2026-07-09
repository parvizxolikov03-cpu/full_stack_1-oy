//  FizzBuzz O'rta
// 1 dan N gacha: 3 ga bo'linsa 'Fizz', 5 ga 'Buzz', ikkalasiga 'FizzBuzz', aks holda sonni
// chiqaring.

const n = 30;

for (let i = 1; i <= n; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
