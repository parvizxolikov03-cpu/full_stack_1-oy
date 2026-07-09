const account = {
  balance: 500000,
  canWithdraw(amount) {
    if (this.balance > amount) {
      return true;
    } else {
      return false;
    }
  },
};

console.log(account.canWithdraw(400000));

