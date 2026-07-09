// 5. Bank hisobi (Class + try/catch + Error)
// BankAccount klassini yarating:
// • constructor(balance) — boshlang‘ich balans
// • deposit(sum) — qo‘shadi, sum <= 0 bo‘lsa Error tashlasin
// • withdraw(sum) — yechadi, balansdan ko‘p bo‘lsa "Mablag‘ yetarli emas" xatosini tashlasin
// • getBalance() — joriy balansni qaytaradi
// balance tashqaridan to‘g‘ridan-to‘g‘ri o‘zgartirib bo‘lmaydigan (private #) bo‘lsin.
// const acc = new BankAccount(100);
// acc.deposit(50); // balans: 150
// acc.withdraw(200); // Error: Mablag‘ yetarli emas

class BankAccount {
  #balance = 0;
  constructor(balance) {
    this.#balance = balance;
  }
  deposit(sum) {
    try {
      if (sum <= 0) {
        throw new Error("Xoto");
      } else {
        this.#balance += sum;
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  withdraw(sum) {
    try {
      if (sum > this.#balance) {
        throw new Error("Mablag' yetarli emas");
      } else {
        this.#balance -= sum;
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount(100);
acc.deposit(50); // balans: 150
console.log(acc.getBalance());
acc.withdraw(200); // Error: Mablag‘ yetarli emas
