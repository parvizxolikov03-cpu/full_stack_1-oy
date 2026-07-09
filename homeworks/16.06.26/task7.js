// 7. Kalkulyator Statistikasi
// Calculator class yarating. add, subtract, multiply, divide. Har amal bajarilganda static
// operationCount oshsin. static getStats().

class Calculator {
  static operationCount = 0;

  add() {
    Calculator.operationCount++;
  }
  subtract() {
    Calculator.operationCount++;
  }
  multiply() {
    Calculator.operationCount++;
  }
  divide() {
    Calculator.operationCount++;
  }
  static getStats() {
    return Calculator.operationCount;
  }
}

const calculator = new Calculator();
calculator.add();
calculator.divide();

console.log(Calculator.getStats());
