// 19. ATM
// ATM class yarating. #cash. deposit(amount), withdraw(amount).
// Yetarli mablag‘ bo‘lmasa xatolik qaytarsin. static atmCount.

class ATM {
  #cash = 0;
  static atmCount = 0;
  constructor() {
    ++ATM.atmCount;
  }

  deposit(amount) {
    this.#cash += amount;
  }
  withdraw(amount) {
    this.#cash -= amount;
  }
}

const atm = new ATM();
const atm1 = new ATM();
const atm2 = new ATM();

atm.deposit(500);
atm.withdraw(100);
console.log(ATM.atmCount);
