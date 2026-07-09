// 6. Login Tizimi
// LoginSystem class yarating. #attempts private property. getAttempts(), resetAttempts(). static
// maxAttempts = 3.

class LoginSystem {
  #attempts = 0;
  static maxAttempts = 3;

  getAttempts() {
    return this.#attempts <= LoginSystem.maxAttempts ? ++this.#attempts : NaN;
  }

  resetAttempts() {
    return (this.#attempts = 0);
  }
}
const login = new LoginSystem();
console.log(login.getAttempts());
console.log(login.getAttempts());

console.log(login.resetAttempts());
