// 4.user object yarating.
// Getter orqali username ni katta harflarda qaytaring.

const user = {
  username: "Parviz",

  get upperUsername() {
    return this.username.toUpperCase();
  }
};

console.log(user.upperUsername); 