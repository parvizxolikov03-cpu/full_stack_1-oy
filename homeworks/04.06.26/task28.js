const user = {
  password: "12345678",
  isStrongPassword() {
    if (this.password.length >= 8) {
      return true;
    } else {
      return false;
    }
  },
};

console.log(user.isStrongPassword());
