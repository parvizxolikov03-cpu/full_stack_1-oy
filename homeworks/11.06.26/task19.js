// 3.temperature object yarating.
// Property:
// celsius
// fahrenheit getter yozing.
// Formula:
// (C × 9/5) + 32

const temperature = {
  celsius: 25,

  get fahrenheit() {
    return (this.celsius * 9 / 5) + 32;
  }
};

console.log(temperature.fahrenheit); // 77