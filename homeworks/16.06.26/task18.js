// 18. Parol Generator
// PasswordGenerator class yarating. static generate(length) tasodifiy parol qaytarsin.

class PasswordGenerator {
  static generate(length) {
    let res = "";
    for (let i = 0; i < length; i++) {
      res += Math.random(fromCharCode());
    }
    return res;
  }
}

const password = new PasswordGenerator();
console.log(PasswordGenerator.generate(8));
