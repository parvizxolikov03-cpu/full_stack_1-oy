// 6.bankAccount object yarating.
// balance getter yozing.
// Hisobdagi mablag'ni qaytarsin.

const bankAccount = {
  _balance: 500000,

  get balance() {
    return this._balance;
  }
};

console.log(bankAccount.balance); 