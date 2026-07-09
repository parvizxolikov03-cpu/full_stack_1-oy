// 1. Bank Hisobi
// BankAccount class yarating. #balance private property. deposit(amount), withdraw(amount),
// getBalance() metodlari bo‘lsin. static bankName = 'UzBank'.

class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    this.#balance -= amount;
  }
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(500);
account.withdraw(100);
console.log(account.getBalance());
