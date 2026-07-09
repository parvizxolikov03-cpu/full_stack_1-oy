// 14. Email Validator
// EmailValidator class yarating. static isValid(email) metodi @ va .
// mavjudligini tekshirsin.

class EmailValidator {
  static isValid(email) {
    return email.split("").includes("@" && ".");
  }
}

const email = new EmailValidator();
console.log(EmailValidator.isValid("parviz@gmail.com"));
