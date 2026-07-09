// 10. Bank tizimi
// Account
// ↓
// DepositAccount
// ↓
// PremiumDepositAccount
// Har bir klass balans haqida qo'shimcha ma'lumot
// qaytarsin.

class Account {
  constructor(name) {
    this.name = name;
  }
  getBalance() {
    console.log(this.name);
  }
}

class DepositAccount extends Account {
  constructor(name, balance) {
    super(name);
    this.balance = balance;
  }
  getBalance() {
    super.getBalance();
    console.log(this.balance);
  }
}

class PremiumDepositAccount extends Account {
  constructor(name, balance) {
    super(name);
    this.balance = balance;
  }
  getBalance() {
    super.getBalance();
    console.log(this.balance);
  }
}

const depositAccount = new DepositAccount("Deposit", 500000);
depositAccount.getBalance();

const premiumDepositAccount = new PremiumDepositAccount(
  "Premium Deposit",
  1000000,
);
premiumDepositAccount.getBalance();
