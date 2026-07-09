// 3. Parol Tekshiruvi
// Account class yarating. #password private property. checkPassword(password) va
// changePassword(oldPass, newPass).

class Account {
  #password;
  constructor(password) {
    this.#password = password;
  }

  checkPassword(password) {
    if (password === this.#password) return true;
    return false;
  }

  changePassword(oldPass, newPass) {
    if (this.checkPassword) {
      this.#password = newPass;
      return this.#password;
    }
  }
}

const password = new Account(1234);
console.log(password.checkPassword(1234));

password.changePassword(1234, 12345);
console.log(password.checkPassword(12345));
