// 3. Account va SavingsAccount
// Account:
// owner
// balance
// SavingsAccount:
// interestRate
// Foiz qo'shilgandan keyingi balansni hisoblang.

class Account {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
}

class SavingsAccount extends Account {
  constructor(owner, balance, interestRate) {
    super(owner, balance);
    this.interestRate = interestRate;
  }
  getInfo() {
    console.log(this.balance);
    console.log(+`${this.balance + (this.balance * 100) / this.interestRate}`);
  }
}

const savingsAccount = new SavingsAccount("Apple", 10000, 10);
savingsAccount.getInfo();
